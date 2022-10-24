module Wasp.Cli.Command.CreateNewProject
  ( createNewProject,
  )
where

import Control.Monad.Except (throwError)
import Control.Monad.IO.Class (liftIO)
import Data.List (intercalate)
import Path.IO (copyDirRecur, doesDirExist)
import StrongPath (Abs, Dir, Path, Path', System, fromAbsFile, parseAbsDir, reldir, relfile, (</>))
import StrongPath.Path (toPathAbsDir)
import System.Directory (getCurrentDirectory)
import qualified System.FilePath as FP
import Text.Printf (printf)
import Wasp.Analyzer.Parser (isValidWaspIdentifier)
import Wasp.Cli.Command (Command, CommandError (..))
import qualified Wasp.Cli.Command.Common as Command.Common
import Wasp.Common (WaspProjectDir)
import qualified Wasp.Common as Common (WaspProjectDir)
import qualified Wasp.Data as Data
import Wasp.Util (indent, kebabToCamelCase)
import qualified Wasp.Util.Terminal as Term

data ProjectInfo = ProjectInfo
  { _projectName :: String,
    _appName :: String
  }

createNewProject :: String -> Command ()
createNewProject projectName = do
  projectInfo <- parseProjectInfo projectName
  createWaspProjectDir projectInfo
  liftIO printGettingStartedInstructions
  where
    printGettingStartedInstructions = do
      putStrLn $ Term.applyStyles [Term.Green] ("Created new Wasp app in ./" ++ projectName ++ " directory!")
      putStrLn "To run it, do:"
      putStrLn ""
      putStrLn $ Term.applyStyles [Term.Bold] ("    cd " ++ projectName)
      putStrLn $ Term.applyStyles [Term.Bold] "    wasp start"
      putStrLn ""
      putStrLn Command.Common.alphaWarningMessage

-- Takes a project name String
-- Returns either the ProjectInfo type that contains both the Project name
-- and the App name (which might be the same), or an error describing why the name is invalid
parseProjectInfo :: String -> Command ProjectInfo
parseProjectInfo name
  | isValidWaspIdentifier appName = return $ ProjectInfo name appName
  | otherwise =
    throwError $
      CommandError "Project creation failed" $
        intercalate
          "\n"
          [ "The project's name is not in the valid format!",
            indent 2 "- It can start with a letter or an underscore.",
            indent 2 "- It can contain only letters, numbers, dashes, or underscores.",
            indent 2 "- It can't be a Wasp keyword."
          ]
  where
    appName = kebabToCamelCase name

createWaspProjectDir :: ProjectInfo -> Command ()
createWaspProjectDir projectInfo = do
  absWaspProjectDir <- getAbsoluteWaspProjectDir projectInfo
  dirExists <- doesDirExist $ toPathAbsDir absWaspProjectDir
  if dirExists
    then throwError $ CommandError "Project creation failed" $ show absWaspProjectDir ++ " is an existing directory"
    else liftIO $ do
      initializeProjectFromSkeleton absWaspProjectDir
      writeMainWaspFile absWaspProjectDir projectInfo

getAbsoluteWaspProjectDir :: ProjectInfo -> Command (Path System Abs (Dir WaspProjectDir))
getAbsoluteWaspProjectDir (ProjectInfo projectName _) = do
  absCwd <- liftIO getCurrentDirectory
  case parseAbsDir $ absCwd FP.</> projectName of
    Right sp -> return sp
    Left err ->
      throwError $
        CommandError
          "Project creation failed"
          ("Failed to parse absolute path to wasp project dir: " ++ show err)

-- To avoid creating a new project manually, we copy the project directory skeleton from our templates.
initializeProjectFromSkeleton :: Path' Abs (Dir Common.WaspProjectDir) -> IO ()
initializeProjectFromSkeleton absWaspProjectDir = do
  dataDir <- Data.getAbsDataDirPath
  let absSkeletonDir = dataDir </> [reldir|Cli/templates/new|]
  copyDirRecur (toPathAbsDir absSkeletonDir) (toPathAbsDir absWaspProjectDir)

writeMainWaspFile :: Path System Abs (Dir WaspProjectDir) -> ProjectInfo -> IO ()
writeMainWaspFile waspProjectDir (ProjectInfo projectName appName) = writeFile absMainWaspFile mainWaspFileContent
  where
    absMainWaspFile = fromAbsFile $ waspProjectDir </> [relfile|main.wasp|]
    mainWaspFileContent =
      unlines
        [ "app %s {" `printf` appName,
          "  title: \"%s\"" `printf` projectName,
          "}",
          "",
          "route RootRoute { path: \"/\", to: MainPage }",
          "page MainPage {",
          "  component: import Main from \"@ext/MainPage.js\"",
          "}"
        ]