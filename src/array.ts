import { isArray, isDef } from './type';

export const toArray = (value: any) => {

  return isArray(value) ? value : isDef(value) ? [value] : [];
}
