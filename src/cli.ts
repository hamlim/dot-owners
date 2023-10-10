import k from "kleur";
import check from "./check";
import { resolveConfig } from "./config";

let branding = k.green().italic(` [dot-owners] `);

export function getFlags(
  flagsInit: Array<string>
): Record<string, string | boolean> {
  let flags = flagsInit.reduce((acc, flagInit) => {
    let flag = flagInit.replace("--", "");
    if (flag.includes("=")) {
      let [key, ...vals] = flag.split("=");
      return {
        ...acc,
        [key]: vals.join("="),
      };
    }
    return {
      ...acc,
      [flag]: true,
    };
  }, {});
  return flags;
}

export default async function cli({
  cmd = process.argv[2],
  flags: flagsInit = process.argv.slice(3),
  print = console.log,
} = {}) {
  let flags = getFlags(flagsInit);

  switch (cmd) {
    case "help": {
      print(`${branding} 👋 Welcome to the dot-owners CLI`);
      print(`${branding} Usage:\n`);

      return;
    }
    case "check": {
      if (flags.help) {
        print(
          `${k.italic(
            `\`dot-owners check\``
          )} determines the owners associated with the current diff.`
        );
        return;
      }

      const config = await resolveConfig();

      await check({ print, flags, config });
      return;
    }
    case "validate": {
      if (flags.help) {
        print(
          `${k.italic(
            `\`dot-owners validate\``
          )} validates the \`.owners\` files within the workspace, and checks that the teams listed within those .owners files are still active.`
        );
        return;
      }
      return;
    }
    default: {
      print(
        k.italic(
          `No command provided to dot-owners cli. Run \`dot-owners help\` to print available commands!`
        )
      );
      return;
    }
  }
}
