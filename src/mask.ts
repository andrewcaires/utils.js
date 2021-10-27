import { isUndefined } from './type';

interface Indexes {

    mask: number;
    text: number;
}

const digit = (val: string): boolean => /^[0-9]$/.test(val);
const letter = (val: string): boolean => /^[A-Za-z]$/.test(val);
const symbol = (val: string): boolean => /^[^A-Za-z0-9]$/.test(val);

const parse = (key: string, val: string, index: Indexes): string => {

    switch (key.toUpperCase()) {
        case '#':
            return val;
        case '0':
        case '9':
            return digit(val) ? val : (index.mask--, '');
        case 'A':
        case 'Z':
            return letter(val) ? val : (index.mask--, '');
        case 'L':
            return letter(val) ? val.toLowerCase() : (index.mask--, '');
        case 'U':
            return letter(val) ? val.toUpperCase() : (index.mask--, '');
        case 'S':
            return symbol(val) ? val : (index.mask--, '');
        default:
            return (key != val && index.text--), key;
    }
}

const next = (mask: string, text: string, index: Indexes): string => {

    index.mask++;
    index.text++;

    const key = mask[index.mask];
    const val = text[index.text];

    return !isUndefined(key) && !isUndefined(val) ? parse(key, val, index) + next(mask, text, index) : '';
}

export const mask = (mask: string, text: string): string => {

    return next(mask, text, { mask: -1, text: -1 });
}
