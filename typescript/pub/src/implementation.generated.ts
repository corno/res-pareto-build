import { API } from "./api.generated"
import { $$ as ibuildArray } from "./implementations/buildArray.native"
import { $$ as ibuildSafeDictionary } from "./implementations/buildSafeDictionary.native"
import { $$ as ibuildUnsafeDictionary } from "./implementations/buildUnsafeDictionary.native"
import { $$ as icreateArrayBuilder } from "./implementations/createArrayBuilder.native"
import { $$ as icreateSafeDictionaryBuilder } from "./implementations/createSafeDictionaryBuilder.native"
import { $$ as icreateUnsafeDictionaryBuilder } from "./implementations/createUnsafeDictionaryBuilder.native"

export const $r: API = {
    'buildArray': ibuildArray,
    'buildSafeDictionary': ibuildSafeDictionary,
    'buildUnsafeDictionary': ibuildUnsafeDictionary,
    'createArrayBuilder': icreateArrayBuilder,
    'createSafeDictionaryBuilder': icreateSafeDictionaryBuilder,
    'createUnsafeDictionaryBuilder': icreateUnsafeDictionaryBuilder,
}