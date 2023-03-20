import * as pt from 'pareto-core-types'

import * as g_common from "glo-pareto-common"
import * as g_this from "./glossary"

export namespace A {
    
    export type buildArray = <GAnnotation>() => g_this.SYNC.A.F.BuildArray<GAnnotation>
    
    export type createAsyncArrayBuilder = <GAnnotation>() => g_this.ASYNC.A.C.CreateArrayBuilder<GAnnotation>
    
    export type createAsyncIgnoringDictionaryBuilder = <GAnnotation>() => g_this.ASYNC.A.C.CreateSafeDictionaryBuilder<GAnnotation>
    
    export type createAsyncOverwritingDictionaryBuilder = <GAnnotation>() => g_this.ASYNC.A.C.CreateSafeDictionaryBuilder<GAnnotation>
    
    export type createSyncIgnoringDictionaryBuilder = <GAnnotation>($d: null, $se: {
        readonly 'onDuplicate': g_common.SYNC.I.String
    }) => g_this.SYNC.A.F.BuildDictionary<GAnnotation>
    
    export type createSyncOverwritingDictionaryBuilder = <GAnnotation>($d: null, $se: {
        readonly 'onDuplicate': g_common.SYNC.I.String
    }) => g_this.SYNC.A.F.BuildDictionary<GAnnotation>
    
    export type createUnsafeAsyncDictionaryBuilder = <GAnnotation>() => g_this.ASYNC.A.C.CreateUnsafeDictionaryBuilder<GAnnotation>
    
    export type unsafeSyncBuildDictionary = <GAnnotation>() => g_this.SYNC.A.F.BuildDictionary<GAnnotation>
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