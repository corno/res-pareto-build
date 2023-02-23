import { API } from "./api"
import { $$ as ibuildArray } from "./implementations/buildArray.native"
import { $$ as iunsafeBuildDictionary } from "./implementations/unsafeBuildDictionary.native"

export const $a: API = {
    'buildArray': ibuildArray,
    'unsafeBuildDictionary': iunsafeBuildDictionary,
}