import { API } from "./api.generated"
import { $$ as ibuildArray } from "./implementations/buildArray.native"
import { $$ as icreateAsyncArrayBuilder } from "./implementations/createAsyncArrayBuilder.native"
import { $$ as icreateAsyncIgnoringDictionaryBuilder } from "./implementations/createAsyncIgnoringDictionaryBuilder.native"
import { $$ as icreateAsyncOverwritingDictionaryBuilder } from "./implementations/createAsyncOverwritingDictionaryBuilder.native"
import { $$ as icreateSyncIgnoringDictionaryBuilder } from "./implementations/createSyncIgnoringDictionaryBuilder.native"
import { $$ as icreateSyncOverwritingDictionaryBuilder } from "./implementations/createSyncOverwritingDictionaryBuilder.native"
import { $$ as icreateUnsafeAsyncDictionaryBuilder } from "./implementations/createUnsafeAsyncDictionaryBuilder.native"
import { $$ as iunsafeSyncBuildDictionary } from "./implementations/unsafeSyncBuildDictionary.native"

export const $r: API = {
    'buildArray': ibuildArray,
    'createAsyncArrayBuilder': icreateAsyncArrayBuilder,
    'createAsyncIgnoringDictionaryBuilder': icreateAsyncIgnoringDictionaryBuilder,
    'createAsyncOverwritingDictionaryBuilder': icreateAsyncOverwritingDictionaryBuilder,
    'createSyncIgnoringDictionaryBuilder': icreateSyncIgnoringDictionaryBuilder,
    'createSyncOverwritingDictionaryBuilder': icreateSyncOverwritingDictionaryBuilder,
    'createUnsafeAsyncDictionaryBuilder': icreateUnsafeAsyncDictionaryBuilder,
    'unsafeSyncBuildDictionary': iunsafeSyncBuildDictionary,
}