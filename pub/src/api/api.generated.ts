import * as pt from 'pareto-core-types'

import * as glo from "./glossary"


export type CbuildArray = glo.FBuildArray

export type CbuildDictionary = glo.FBuildDictionary

export type CunsafeBuildDictionary = glo.FUnsafeBuildDictionary

export type API = {
    buildArray: CbuildArray
    buildDictionary: CbuildDictionary
    unsafeBuildDictionary: CunsafeBuildDictionary
}