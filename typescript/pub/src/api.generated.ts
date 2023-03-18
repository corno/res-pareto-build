import * as pt from 'pareto-core-types'

import * as g_common from "glo-pareto-common"
import * as g_this from "./glossary"
export namespace A {
    
    export type buildArray = g_this.SYNC.F.BuildArray
    
    export type createIgnoringDictionaryBuilder = ($d: {}, $se: {
        readonly 'onDuplicate': g_common.SYNC.I.String
    }) => g_this.SYNC.F.BuildDictionary
    
    export type createOverwritingDictionaryBuilder = ($d: {}, $se: {
        readonly 'onDuplicate': g_common.SYNC.I.String
    }) => g_this.SYNC.F.BuildDictionary
    
    export type unsafeBuildDictionary = g_this.SYNC.F.UnsafeBuildDictionary
}

export type API = {
    buildArray: A.buildArray
    createIgnoringDictionaryBuilder: A.createIgnoringDictionaryBuilder
    createOverwritingDictionaryBuilder: A.createOverwritingDictionaryBuilder
    unsafeBuildDictionary: A.unsafeBuildDictionary
}