import k from 'kleur'

let branding = k.green().italic(` [dot-owners] `)

export default async function cli({
  cmd = process.argv[2],
  print = console.log
} = {}) {
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
