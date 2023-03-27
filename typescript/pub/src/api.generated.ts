import * as pt from 'pareto-core-types'

import * as g_common from "glo-pareto-common"
import * as g_this from "./glossary"

export namespace D {
    
    
    
    
    
    
}

export namespace A {
    
    export type buildArray = () => g_this.SYNC.A.F.BuildArray
    
    export type buildSafeDictionary = ($: g_this.T.DictionaryBuildStrategy, $se: {
        readonly 'onDuplicate': g_common.SYNC.I.String
    }) => g_this.SYNC.A.F.BuildSafeDictionary
    
    export type buildUnsafeDictionary = () => g_this.SYNC.A.F.BuildUnsafeDictionary
    
    export type createArrayBuilder = () => g_this.ASYNC.A.C.CreateArrayBuilder
    
    export type createSafeDictionaryBuilder = ($: g_this.T.DictionaryBuildStrategy, ) => g_this.ASYNC.A.C.CreateSafeDictionaryBuilder
    
    export type createUnsafeDictionaryBuilder = () => g_this.ASYNC.A.C.CreateUnsafeDictionaryBuilder
}

export type API = {
    readonly 'buildArray': A.buildArray
    readonly 'buildSafeDictionary': A.buildSafeDictionary
    readonly 'buildUnsafeDictionary': A.buildUnsafeDictionary
    readonly 'createArrayBuilder': A.createArrayBuilder
    readonly 'createSafeDictionaryBuilder': A.createSafeDictionaryBuilder
    readonly 'createUnsafeDictionaryBuilder': A.createUnsafeDictionaryBuilder
}