import { API } from "./api"
import { $$ as ibuildArray } from "./implementations/buildArray.native"
import { $$ as ibuildDictionary } from "./implementations/buildDictionary.native"

export const $a: API = {
    'buildArray': ibuildArray,
    'buildDictionary': ibuildDictionary,
}