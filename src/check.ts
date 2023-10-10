import { execFile as eF } from "child_process";
import { promisify } from "util";

let execFile = promisify(eF);

type TODO = any;

interface Options {
  print(msg: TODO): void;
  flags: Record<string, string | boolean>;
  config: TODO;
}

async function getChangedFiles() {
  let result = (await execFile("git", ["diff", "--name-only"], {
    cwd: process.cwd(),
    encoding: "utf8",
    maxBuffer: 1024 * 1000,
  })) as unknown as string;
  return result.split("\n").filter(Boolean);
}

export default async function check({
  print,
  flags,
  config,
}: Options): Promise<TODO> {
  const changedFiles = await getChangedFiles();
  console.log(changedFiles);
}
