import * as pt from 'pareto-core-types'

import * as g_common from "glo-pareto-common"
import * as g_this from "./glossary"

export type buildArray = g_this.F.BuildArray

export type createIgnoringDictionaryBuilder = ($d: {
    readonly 'onDuplicate': g_common.B.String
}) => g_this.F.BuildDictionary

export type createOverwritingDictionaryBuilder = ($d: {
    readonly 'onDuplicate': g_common.B.String
}) => g_this.F.BuildDictionary

export type unsafeBuildDictionary = g_this.F.UnsafeBuildDictionary

export type API = {
    buildArray: buildArray
    createIgnoringDictionaryBuilder: createIgnoringDictionaryBuilder
    createOverwritingDictionaryBuilder: createOverwritingDictionaryBuilder
    unsafeBuildDictionary: unsafeBuildDictionary
}