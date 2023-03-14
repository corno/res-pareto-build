import { API } from "./api.generated"
import { $$ as ibuildArray } from "./implementations/buildArray.native"
import { $$ as icreateIgnoringDictionaryBuilder } from "./implementations/createIgnoringDictionaryBuilder.native"
import { $$ as icreateOverwritingDictionaryBuilder } from "./implementations/createOverwritingDictionaryBuilder.native"
import { $$ as iunsafeBuildDictionary } from "./implementations/unsafeBuildDictionary.native"

export const $r: API = {
    'buildArray': ibuildArray,
    'createIgnoringDictionaryBuilder': icreateIgnoringDictionaryBuilder,
    'createOverwritingDictionaryBuilder': icreateOverwritingDictionaryBuilder,
    'unsafeBuildDictionary': iunsafeBuildDictionary,
}