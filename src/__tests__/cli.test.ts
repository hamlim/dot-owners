import { test, expect } from "bun:test";
import { getFlags } from "../cli";

test("getFlags - empty for no args", () => {
  expect(Object.keys(getFlags([])).length).toBe(0);
});

test("getFlags - parses boolean flags", () => {
  expect(getFlags(["--help", "--foo", "--bar"])).toMatchObject({
    help: true,
    foo: true,
    bar: true,
  });
});

test("getFlags - handles flags with values", () => {
  expect(getFlags(["--foo=bar"])).toMatchObject({
    foo: "bar",
  });
});

test("getFlags - handles flags with values that includes equals signs", () => {
  expect(getFlags(["--foo=bar=baz"])).toMatchObject({
    foo: "bar=baz",
  });
});
