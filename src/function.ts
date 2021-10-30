type forLoopCallback = (index: number, count: number) => any;

export const forLoop = (count: number, callback: forLoopCallback, thisArg?: any) => {

  for (let index = 1; index <= count; index++) {

    callback.call(thisArg || null, index, count);
  }

  return count;
}

export const noop = () => { }
