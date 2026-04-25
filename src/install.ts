import { mkdirp } from "mkdirp"
import * as path from "path"
import { rimraf } from "rimraf"
import * as tar from "tar"

const target = path.join(__dirname, "..", "/compiler")
const tsPath = path.join(target, "/typescript.tgz")

const originalTsFolder = path.join(require.resolve("typescript"), "../../")

rimraf(originalTsFolder).then(() => {
  mkdirp(originalTsFolder).then(() =>
    tar.extract({
      file: tsPath,
      cwd: originalTsFolder,
      strip: 1
    })
  )
})
