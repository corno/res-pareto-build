import * as pt from 'pareto-core-types'

import * as gthis from "./glossary"

export type CbuildArray = gthis.FBuildArray

export type CbuildDictionary = gthis.FBuildDictionary

export type CunsafeBuildDictionary = gthis.FUnsafeBuildDictionary

export type API = {
    buildArray: CbuildArray
    buildDictionary: CbuildDictionary
    unsafeBuildDictionary: CunsafeBuildDictionary
}