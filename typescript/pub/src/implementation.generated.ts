import { API } from "./api.generated"
import { $$ as ibuildArray } from "./implementations/buildArray.native"
import { $$ as ibuildSafeDictionary } from "./implementations/buildSafeDictionary.native"
import { $$ as ibuildUnsafeDictionary } from "./implementations/buildUnsafeDictionary.native"
import { $$ as icreateArrayBuilder } from "./implementations/createArrayBuilder.native"
import { $$ as icreateSafeDictionaryBuilder } from "./implementations/createSafeDictionaryBuilder.native"
import { $$ as icreateStringBuilder } from "./implementations/createStringBuilder.native"
import { $$ as icreateUnsafeDictionaryBuilder } from "./implementations/createUnsafeDictionaryBuilder.native"

export const $api: API = {
    'buildArray': ibuildArray,
    'buildSafeDictionary': ibuildSafeDictionary,
    'buildUnsafeDictionary': ibuildUnsafeDictionary,
    'createArrayBuilder': icreateArrayBuilder,
    'createSafeDictionaryBuilder': icreateSafeDictionaryBuilder,
    'createStringBuilder': icreateStringBuilder,
    'createUnsafeDictionaryBuilder': icreateUnsafeDictionaryBuilder,
}