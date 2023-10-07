import k from 'kleur'

interface Args {
  help?: boolean
}

let branding = k.bgGreen().white().italic(` [dot-owners] `)

export default function cli() {
  let args = process.argv.slice(2).reduce((acc, arg) => {
    let argName = arg.replace(/--/, '')
    if (argName.includes('=')) {
      let [key, val] = argName.split('=')
      return {
        ...acc,
        [key]: val,
      }
    }
    return {
      ...acc,
      [argName]: true,
    }
  }, {})

  let { help } = args as Args

  if (help) {
    console.log(`${branding} 👋 Welcome to the .owners CLI`)
    console.log(`${branding} Usage:\n`)

    return
  }
}
