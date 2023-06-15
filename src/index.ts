export const arabicToRoman = (num: number): string => {
    
    const importantValues = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    let result: string = '';
    for (const digit of importantValues) {
        while (num >= digit) {
            result += convertDigit(digit);
            num -= digit;
        }   
    }
    return result;
}

export const romanToArabic = (romanNumeral: string): number => {
    
    const importantValues = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"]
    let result: number = 0;
    for (const numeral of importantValues) {
        while (romanNumeral.endsWith(numeral)) {
            result += convertNumeral(numeral);
            romanNumeral = romanNumeral.substring(0,romanNumeral.lastIndexOf(numeral));
        }   
    }
    return result;
}

const convertDigit = (digit: number) : string => {
    switch (digit) {
        case 1: return "I";
        case 4: return "IV";
        case 5: return "V";
        case 9: return "IX";
        case 10: return "X";
        case 40: return "XL";
        case 50: return "L";
        case 90: return "XC";
        case 100: return "C";
        case 400: return "CD";
        case 500: return "D";
        case 900: return "CM";
        case 1000: return "M";
    }
    return 'This didn\'t work';
}

const convertNumeral = (numeral: string) : number => {
    switch (numeral) {
        case "I": return 1;
        case "IV": return 4;
        case "V": return 5;
        case "IX": return 9;
        case "X": return 10;
        case "XL": return 40;
        case "L": return 50;
        case "XC": return 90;
        case "C": return 100;
        case "CD": return 400;
        case "D": return 500;
        case "CM": return 900;
        case "M": return 1000;
    }
    return 0;
}

