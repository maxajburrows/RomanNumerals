const numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
const numerals = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
let numeralMap = new Map();
numbers.forEach((number, i) => numeralMap.set(number, numerals[i]));

export const arabicToRoman = (num: number): string => {
    let result: string = '';
    for (const [key, value] of numeralMap) {
        while (num >= key) {
            result += value;
            num -= key;
        }
    }
    return result;
}

export const romanToArabic = (romanNumeral: string): number => {
    let result: number = 0;
    for (const [key, value] of numeralMap) {
        while (romanNumeral.startsWith(value)) {
            result += key;
            romanNumeral = romanNumeral.replace(value, '');
        }
    }
    return result;
}