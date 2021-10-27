type forEachCallback<T> = (value: T, index: number, array: Array<T>) => Promise<void>;

export const forEachAsync = async <T>(array: Array<T>, callback: forEachCallback<T>, thisArg?: any): Promise<void> => {

  await Promise.all(array.map((value, index) => {

    return callback.call(thisArg || null, value, index, array);
  }));
}

export const forEachSeries = async <T>(array: Array<T>, callback: forEachCallback<T>, thisArg?: any): Promise<void> => {

  for (let index = 0; index < array.length; index++) {

    await callback.call(thisArg || null, array[index], index, array);
  }
}

export const sleep = (ms: number): Promise<void> => new Promise((resolve) => setTimeout(resolve, ms));
