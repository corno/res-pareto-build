import { API } from "./api.generated"
import { $$ as ibuildArray } from "./implementations/buildArray.native"
import { $$ as ibuildDictionary } from "./implementations/buildDictionary.native"
import { $$ as iunsafeBuildDictionary } from "./implementations/unsafeBuildDictionary.native"

export const $r: API = {
    'buildArray': ibuildArray,
    'buildDictionary': ibuildDictionary,
    'unsafeBuildDictionary': iunsafeBuildDictionary,
}