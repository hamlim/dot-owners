import k from 'kleur'


let print = console.log;

let branding = k.green().italic(` [dot-owners] `)

export default function cli() {
  let cmd = process.argv[2];

  switch (cmd) {
    case 'help': {
      print(`${branding} 👋 Welcome to the .owners CLI`)
      print(`${branding} Usage:\n`)

      return;
    }
    case 'check': {


      return;
    }
    case 'validate': {


      return;
    }
    default: {
      print(k.italic(`No command provided to dot-owners cli. Run \`dot-owners help\` to print available commands!`))
      return;
    }
  }
}
