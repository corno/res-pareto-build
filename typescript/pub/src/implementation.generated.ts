import { API } from "./api.generated"
import { $$ as ibuildArray } from "./implementations/buildArray.native"
import { $$ as icreateDictionaryBuilder } from "./implementations/createDictionaryBuilder.native"
import { $$ as iunsafeBuildDictionary } from "./implementations/unsafeBuildDictionary.native"

export const $r: API = {
    'buildArray': ibuildArray,
    'createDictionaryBuilder': icreateDictionaryBuilder,
    'unsafeBuildDictionary': iunsafeBuildDictionary,
}