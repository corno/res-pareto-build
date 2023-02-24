import * as pt from 'pareto-core-types'

import * as gglo from "./glossary"


export type CbuildArray = gglo.FBuildArray

export type CbuildDictionary = gglo.FBuildDictionary

export type CunsafeBuildDictionary = gglo.FUnsafeBuildDictionary

export type API = {
    buildArray: CbuildArray
    buildDictionary: CbuildDictionary
    unsafeBuildDictionary: CunsafeBuildDictionary
}