module Wasp.Cli.Command.Uninstall
  ( uninstall,
  )
where

import Control.Monad (when)
import Control.Monad.IO.Class (liftIO)
import StrongPath (fromAbsDir, fromAbsFile, (</>))
import System.Exit (die)
import Wasp.Cli.Command (Command)
import Wasp.Cli.Command.FileSystem (deleteDirectoryIfExists, deleteFileIfExists, getHomeDir, getUserCacheDirPath, waspBinFile, waspInstallationDir)
import Wasp.Cli.Command.Message (cliSendMessageC)
import Wasp.Cli.Command.Telemetry.Common (getWaspCacheDirPath)
import qualified Wasp.Message as Msg

-- | Removes Wasp CLI from the system.
-- It removes the follwing:
-- {home}/.local/share/wasp-lang
-- {home}/.local/bin/wasp
-- {home}/.cache/wasp
uninstall :: Command ()
uninstall = do
  cliSendMessageC $ Msg.Info "Uninstalling Wasp ..."
  liftIO removeWaspFiles
  cliSendMessageC $ Msg.Success "Uninstalled Wasp"

removeWaspFiles :: IO ()
removeWaspFiles = do
  homeDir <- getHomeDir
  userCacheDir <- getUserCacheDirPath

  let absWaspInstallationDir = fromAbsDir $ homeDir </> waspInstallationDir
      abswWspBinFile = fromAbsFile $ homeDir </> waspBinFile
      absWaspCacheDir = fromAbsDir $ getWaspCacheDirPath userCacheDir

  putStr $
    unlines
      [ "We will remove the following directories:",
        "  " ++ absWaspInstallationDir,
        "  " ++ absWaspCacheDir,
        "",
        "We will also remove the following files:",
        "  " ++ abswWspBinFile,
        "",
        "Are you sure you want to continue? [y/N]"
      ]

  answer <- getLine
  when (answer /= "y") $ die "Aborted."
  deleteDirectoryIfExists absWaspInstallationDir
  deleteFileIfExists abswWspBinFile
  deleteDirectoryIfExists absWaspCacheDir