import * as pt from 'pareto-core-types'

import * as g_common from "glo-pareto-common"
import * as g_this from "./glossary"

export namespace A {
    
    export type buildArray = () => g_this.SYNC.A.F.BuildArray
    
    export type createAsyncArrayBuilder = () => g_this.ASYNC.A.C.CreateArrayBuilder
    
    export type createAsyncDictionaryBuilder = ($: g_this.T.DictionaryBuildStrategy, ) => g_this.ASYNC.A.C.CreateSafeDictionaryBuilder
    
    export type createSyncDictionaryBuilder = ($: g_this.T.DictionaryBuildStrategy, $se: {
        readonly 'onDuplicate': g_common.SYNC.I.String
    }, ) => g_this.SYNC.A.F.BuildDictionary
    
    export type createUnsafeAsyncDictionaryBuilder = () => g_this.ASYNC.A.C.CreateUnsafeDictionaryBuilder
    
    export type unsafeSyncBuildDictionary = () => g_this.SYNC.A.F.BuildDictionary
}

export type API = {
    readonly 'buildArray': A.buildArray
    readonly 'createAsyncArrayBuilder': A.createAsyncArrayBuilder
    readonly 'createAsyncDictionaryBuilder': A.createAsyncDictionaryBuilder
    readonly 'createSyncDictionaryBuilder': A.createSyncDictionaryBuilder
    readonly 'createUnsafeAsyncDictionaryBuilder': A.createUnsafeAsyncDictionaryBuilder
    readonly 'unsafeSyncBuildDictionary': A.unsafeSyncBuildDictionary
}