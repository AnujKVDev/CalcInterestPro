export const principalInWords = (principal) => {
    const units = [
        "",
        "One",
        "Two",
        "Three",
        "Four",
        "Five",
        "Six",
        "Seven",
        "Eight",
        "Nine",
    ];
    const teens = [
        "Eleven",
        "Twelve",
        "Thirteen",
        "Fourteen",
        "Fifteen",
        "Sixteen",
        "Seventeen",
        "Eighteen",
        "Nineteen",
    ];
    const tens = [
        "",
        "Ten",
        "Twenty",
        "Thirty",
        "Forty",
        "Fifty",
        "Sixty",
        "Seventy",
        "Eighty",
        "Ninety",
    ];
    const thousands = ["", "Thousand", "Lakh", "Crore"];

    const convertToWords = (num) => {
        if (num === 0) return "Zero";

        let word = "";
        let digit;

        // Crores
        if (num >= 10000000) {
            digit = Math.floor(num / 10000000);
            word += convertToWords(digit) + " Crore ";
            num %= 10000000;
        }

        // Lakhs
        if (num >= 100000) {
            digit = Math.floor(num / 100000);
            word += convertToWords(digit) + " Lakh ";
            num %= 100000;
        }

        // Thousands
        if (num >= 1000) {
            digit = Math.floor(num / 1000);
            word += convertToWords(digit) + " Thousand ";
            num %= 1000;
        }

        // Hundreds
        if (num >= 100) {
            digit = Math.floor(num / 100);
            word += convertToWords(digit) + " Hundred ";
            num %= 100;
        }

        if (num > 0) {
            if (word !== "") word += "and ";

            if (num < 10) {
                word += units[num];
            } else if (num > 10 && num < 20) {
                word += teens[num - 11];
            } else {
                word += tens[Math.floor(num / 10)];
                if (num % 10 > 0) {
                    word += " " + units[num % 10];
                }
            }
        }

        return word.trim();
    };

    return convertToWords(principal);
};

export const displayFormattedDate = (date) => {
    const d = new Date(date);
    return d.toDateString();
};

export const principalInWordsHindi = (principal) => {
    const units = [
        "",
        "एक",
        "दो",
        "तीन",
        "चार",
        "पाँच",
        "छह",
        "सात",
        "आठ",
        "नौ",
    ];
    const teens = [
        "ग्यारह",
        "बारह",
        "तेरह",
        "चौदह",
        "पंद्रह",
        "सोलह",
        "सत्रह",
        "अठारह",
        "उन्नीस",
    ];
    const tens = [
        "",
        "दस",
        "बीस",
        "तीस",
        "चालीस",
        "पचास",
        "साठ",
        "सत्तर",
        "अस्सी",
        "नब्बे",
    ];
    const thousands = ["", "हजार", "लाख", "करोड़"];

    const convertToWords = (num) => {
        if (num === 0) return "शून्य";

        let word = "";
        let digit;

        // Crores
        if (num >= 10000000) {
            digit = Math.floor(num / 10000000);
            word += convertToWords(digit) + " करोड़ ";
            num %= 10000000;
        }

        // Lakhs
        if (num >= 100000) {
            digit = Math.floor(num / 100000);
            word += convertToWords(digit) + " लाख ";
            num %= 100000;
        }

        // Thousands
        if (num >= 1000) {
            digit = Math.floor(num / 1000);
            word += convertToWords(digit) + " हजार ";
            num %= 1000;
        }

        // Hundreds
        if (num >= 100) {
            digit = Math.floor(num / 100);
            word += convertToWords(digit) + " सौ ";
            num %= 100;
        }

        if (num > 0) {
            if (word !== "") word += "और ";

            if (num < 10) {
                word += units[num];
            } else if (num > 10 && num < 20) {
                word += teens[num - 11];
            } else {
                word += tens[Math.floor(num / 10)];
                if (num % 10 > 0) {
                    word += " " + units[num % 10];
                }
            }
        }

        return word.trim();
    };

    return convertToWords(principal);
};