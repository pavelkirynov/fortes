import throttle from "lodash.throttle";

abstract class Utils {
  private static readonly alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  public static numberToEncodedLetter(number: number): string | undefined {
    if (isNaN(number)) {
      return undefined;
    }

    number = Math.abs(Math.floor(number));

    let index = number % 26;
    let quotient = number / 26;
    let result: string;

    if (number <= 26) {
      return this.numToLetter(number);
    }

    if (quotient >= 1) {
      if (index === 0) {
        quotient--;
      }
      result = this.numberToEncodedLetter(quotient);
    }

    if (index === 0) {
      index = 26;
    }

    return result + this.numToLetter(index);
  }

  private static numToLetter(number: number): string | undefined {
    if (number > 26 || number < 0) {
      return undefined;
    }

    if (number === 0) {
      return "";
    } else {
      return this.alphabet.slice(number - 1, number);
    }
  }

  /**
   * Throttles an async function in a way that can be awaited.
   * By default throttle doesn't return a promise for async functions unless it's invoking them immediately. See CUR-4769 for details.
   * @param func async function to throttle calls for.
   * @param wait same function as lodash.throttle's wait parameter.
   *             Call this function at most this often.
   * @returns a promise which will be resolved/ rejected only if the function is executed, with the result of the underlying call.
   */
  public static asyncThrottle<F extends (...args: any[]) => Promise<any>>(
    func: F,
    wait?: number
  ) {
    const throttled = throttle((resolve, reject, args: Parameters<F>) => {
      func(...args)
        .then(resolve)
        .catch(reject);
    }, wait);
    return (...args: Parameters<F>): ReturnType<F> =>
      new Promise((resolve, reject) => {
        throttled(resolve, reject, args);
      }) as ReturnType<F>;
  }
}

export { Utils };
