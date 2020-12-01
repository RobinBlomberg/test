/* eslint-disable no-console */

import * as Ansi from '@robinblomberg/ansi';
import { Timer } from '@robinblomberg/timer';

const BADGE_FAIL = Ansi.bgRed(Ansi.black(Ansi.bold(' FAIL ')));
const BADGE_SUCCESS = Ansi.bgGreen(Ansi.black(Ansi.bold(' SUCCESS ')));

/**
 * @param {string} name
 * @param {Timer} timer
 */
const _logSuccess = (name, timer) => {
  const elapsed = timer.elapsed();
  const elapsedString = Ansi.gray(`(${(elapsed / 1000).toFixed(2)}s)`);

  console.log(`${BADGE_SUCCESS} ${Ansi.green(name)} ${elapsedString}\n`);
};

export * from '@robinblomberg/assert';

/**
 * @param {string} description
 * @param {() => void | Promise<void>} test
 * @return {void | Promise<void>}
 */
export const describe = (description, test) => {
  return test();
};

export const it = describe;

/**
 * @param {string} name
 * @param {() => void | Promise<void>} run
 * @return {() => void | Promise<void>}
 */
export const test = (name, run) => {
  return () => {
    try {
      const timer = new Timer();
      const returnee = run();

      if (returnee instanceof Promise) {
        returnee.then(() => {
          _logSuccess(name, timer);
        });
      } else {
        _logSuccess(name, timer);
      }

      return returnee;
    } catch (error) {
      console.log(`${BADGE_FAIL} ${Ansi.red(name)}\n`);
      throw error;
    }
  };
};
