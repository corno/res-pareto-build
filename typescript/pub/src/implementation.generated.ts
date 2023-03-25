import { API } from "./api.generated"
import { $$ as ibuildArray } from "./implementations/buildArray.native"
import { $$ as icreateAsyncArrayBuilder } from "./implementations/createAsyncArrayBuilder.native"
import { $$ as icreateAsyncDictionaryBuilder } from "./implementations/createAsyncDictionaryBuilder.native"
import { $$ as icreateSyncDictionaryBuilder } from "./implementations/createSyncDictionaryBuilder.native"
import { $$ as icreateUnsafeAsyncDictionaryBuilder } from "./implementations/createUnsafeAsyncDictionaryBuilder.native"
import { $$ as iunsafeSyncBuildDictionary } from "./implementations/unsafeSyncBuildDictionary.native"

export const $r: API = {
    'buildArray': ibuildArray,
    'createAsyncArrayBuilder': icreateAsyncArrayBuilder,
    'createAsyncDictionaryBuilder': icreateAsyncDictionaryBuilder,
    'createSyncDictionaryBuilder': icreateSyncDictionaryBuilder,
    'createUnsafeAsyncDictionaryBuilder': icreateUnsafeAsyncDictionaryBuilder,
    'unsafeSyncBuildDictionary': iunsafeSyncBuildDictionary,
}