import * as pt from 'pareto-core-types'

import * as g_common from "glo-pareto-common"
import * as g_this from "./glossary"

export namespace A {
    
    export type buildArray = g_this.SYNC.A.F.BuildArray
    
    export type createAsyncArrayBuilder = g_this.ASYNC.A.C.CreateArrayBuilder
    
    export type createAsyncIgnoringDictionaryBuilder = g_this.ASYNC.A.C.CreateSafeDictionaryBuilder
    
    export type createAsyncOverwritingDictionaryBuilder = g_this.ASYNC.A.C.CreateSafeDictionaryBuilder
    
    export type createSyncIgnoringDictionaryBuilder = ($d: null, $se: {
        readonly 'onDuplicate': g_common.SYNC.I.String
    }) => g_this.SYNC.A.F.BuildDictionary
    
    export type createSyncOverwritingDictionaryBuilder = ($d: null, $se: {
        readonly 'onDuplicate': g_common.SYNC.I.String
    }) => g_this.SYNC.A.F.BuildDictionary
    
    export type createUnsafeAsyncDictionaryBuilder = g_this.ASYNC.A.C.CreateUnsafeDictionaryBuilder
    
    export type unsafeSyncBuildDictionary = g_this.SYNC.A.F.BuildDictionary
}

export type API = {
    readonly 'buildArray': A.buildArray
    readonly 'createAsyncArrayBuilder': A.createAsyncArrayBuilder
    readonly 'createAsyncIgnoringDictionaryBuilder': A.createAsyncIgnoringDictionaryBuilder
    readonly 'createAsyncOverwritingDictionaryBuilder': A.createAsyncOverwritingDictionaryBuilder
    readonly 'createSyncIgnoringDictionaryBuilder': A.createSyncIgnoringDictionaryBuilder
    readonly 'createSyncOverwritingDictionaryBuilder': A.createSyncOverwritingDictionaryBuilder
    readonly 'createUnsafeAsyncDictionaryBuilder': A.createUnsafeAsyncDictionaryBuilder
    readonly 'unsafeSyncBuildDictionary': A.unsafeSyncBuildDictionary
}