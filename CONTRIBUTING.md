# Contributing

This project heavily uses [Bun](https://bun.sh/) (tested on 1.0.4), we use it to
build, test, manage dependencies, and generally run scripts, etc.

## Tools:

- [Bun](https://bun.sh/)
- [dprint](https://dprint.dev/) - for formatting

## Development:

> Since I haven't figured out how to let bun link the binary to the workspace
> yet, I've opted for a local script instead. Hopefully we can fix this soon!

To run the CLI locally, you can run `bun ./local.ts` and then pass any arguments
like you would normally, for example:

```sh
bun ./local.ts check --help
```

## Tests:

Tests can be run via `bun test`, generally unit tests work well but integration
tests would be great also!

## Workflow:

At the moment, I do most of my development right from main using stacked
diffs/PRs via [git-pile](https://github.com/keith/git-pile). I recommend other
contributors give it a go - but it shouldn't really impact most folks I think
(so feel free to fork and open PRs however you want!)
