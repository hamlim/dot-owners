import cli from "./cli";

cli({
  cmd: process.argv[2],
  print: console.log,
});
