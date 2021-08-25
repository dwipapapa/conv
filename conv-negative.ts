namespace conv {
    //% block
    export function Conv_to_N_P(num: number) {
        if (num != 0) {
            return 0 - num
        }
        return spriteutils.consts(spriteutils.Consts.Undefined)
    }
}
