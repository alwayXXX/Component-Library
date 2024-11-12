import { promisify } from 'node:util'
import download from 'download-git-repo'
import ora from 'ora'

export default async (repo, desc) => {
  const process = ora(`正在下载模板...${repo}`)
  process.start()
  await promisify(download)(repo, desc)
  process.succeed()
}
