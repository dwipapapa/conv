namespace conv {
    //% block
    export function ConvertNumber(num: number) {
        if (num >= 1e+33) {
            return "" + spriteutils.roundWithPrecision(num / 1e+33, 2) + "d"
        } else if (num >= 1e+30) {
            return "" + spriteutils.roundWithPrecision(num / 1e+30, 2) + "n"
        } else if (num >= 1e+27) {
            return "" + spriteutils.roundWithPrecision(num / 1e+27, 2) + "o"
        } else if (num >= 1e+24) {
            return "" + spriteutils.roundWithPrecision(num / 1e+24, 2) + "S"
        } else if (num >= 1e+21) {
            return "" + spriteutils.roundWithPrecision(num / 1e+21, 2) + "s"
        } else if (num >= 1000000000000000000) {
            return "" + spriteutils.roundWithPrecision(num / 1000000000000000000, 2) + "Q"
        } else if (num >= 1000000000000000) {
            return "" + spriteutils.roundWithPrecision(num / 1000000000000000, 2) + "q"
        } else if (num >= 1000000000000) {
            return "" + spriteutils.roundWithPrecision(num / 1000000000000, 2) + "t"
        } else if (num >= 1000000000) {
            return "" + spriteutils.roundWithPrecision(num / 1000000000, 2) + "b"
        } else if (num >= 1000000) {
            return "" + spriteutils.roundWithPrecision(num / 1000000, 2) + "m"
        } else if (num >= 1000) {
            return "" + spriteutils.roundWithPrecision(num / 1000, 2) + "k"
        } else {
            return convertToText(num)
        }
    }
}
