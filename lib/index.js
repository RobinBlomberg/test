/**
 * @typedef {import('../main').Promiseable<void>} PromiseableVoid
 * @typedef {import('../main').TestFunction} TestFunction
 */

import * as Ansi from '@robinblomberg/ansi';
import { Timer } from '@robinblomberg/timer';

/**
 * @param {string} name
 * @param {Timer} timer
 */
const _logSuccess = (name, timer) => {
  const elapsed = timer.elapsed();
  const elapsedString = Ansi.gray(`(${(elapsed / 1000).toFixed(2)}s)`);

  // eslint-disable-next-line no-console
  console.log(
    `${Ansi.bgGreen(Ansi.black(Ansi.bold(' SUCCESS ')))} ${Ansi.green(name)} ${elapsedString}\n`
  );
};

export * from '@robinblomberg/assert';

/**
 * @param {string} description
 * @param {TestFunction} test
 * @return {PromiseableVoid}
 */
export const describe = (description, test) => {
  return test();
};

export const it = describe;

/**
 * @param {string} name
 * @param {TestFunction} run
 * @return {TestFunction}
 */
export const test = (name, run) => {
  return async() => {
    try {
      const timer = new Timer();
      const returnee = run();

      if (returnee instanceof Promise) {
        await returnee;
      }

      _logSuccess(name, timer);

      return returnee;
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(`${Ansi.bgRed(Ansi.black(Ansi.bold(' FAIL ')))} ${Ansi.red(name)}\n`);
      throw error;
    }
  };
};
