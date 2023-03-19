import * as pt from 'pareto-core-types'

import * as g_common from "glo-pareto-common"
import * as g_this from "./glossary"
export namespace A {
    
    export type buildArray = g_this.SYNC.F.BuildArray
    
    export type createAsyncArrayBuilder = g_this.ASYNC.C.CreateArrayBuilder
    
    export type createAsyncIgnoringDictionaryBuilder = g_this.ASYNC.C.CreateSafeDictionaryBuilder
    
    export type createAsyncOverwritingDictionaryBuilder = g_this.ASYNC.C.CreateSafeDictionaryBuilder
    
    export type createSyncIgnoringDictionaryBuilder = ($d: {}, $se: {
        readonly 'onDuplicate': g_common.SYNC.I.String
    }) => g_this.SYNC.F.BuildDictionary
    
    export type createSyncOverwritingDictionaryBuilder = ($d: {}, $se: {
        readonly 'onDuplicate': g_common.SYNC.I.String
    }) => g_this.SYNC.F.BuildDictionary
    
    export type createUnsafeAsyncDictionaryBuilder = g_this.ASYNC.C.CreateUnsafeDictionaryBuilder
    
    export type unsafeSyncBuildDictionary = g_this.SYNC.F.BuildDictionary
}

export type API = {
    buildArray: A.buildArray
    createAsyncArrayBuilder: A.createAsyncArrayBuilder
    createAsyncIgnoringDictionaryBuilder: A.createAsyncIgnoringDictionaryBuilder
    createAsyncOverwritingDictionaryBuilder: A.createAsyncOverwritingDictionaryBuilder
    createSyncIgnoringDictionaryBuilder: A.createSyncIgnoringDictionaryBuilder
    createSyncOverwritingDictionaryBuilder: A.createSyncOverwritingDictionaryBuilder
    createUnsafeAsyncDictionaryBuilder: A.createUnsafeAsyncDictionaryBuilder
    unsafeSyncBuildDictionary: A.unsafeSyncBuildDictionary
}