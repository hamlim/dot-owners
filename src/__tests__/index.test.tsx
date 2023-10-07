import {test, expect} from 'bun:test';
import cli from '../index'

test('it works', async () => {
  let logs: Array<string> = []
  function print(msg: string) {
    logs.push(msg);
  }
  await cli({
    cmd: 'help',
    print
  });
  expect(logs).toMatchSnapshot()
})
