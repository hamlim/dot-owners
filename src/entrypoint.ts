import cli from "./cli";

cli({
  cmd: process.argv[2],
  flags: process.argv.slice(3),
  print: console.log,
});
