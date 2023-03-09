import * as pt from 'pareto-core-types'

import * as g_this from "./glossary"

export type buildArray = g_this.F.BuildArray

export type buildDictionary = g_this.F.BuildDictionary

export type unsafeBuildDictionary = g_this.F.UnsafeBuildDictionary

export type API = {
    buildArray: buildArray
    buildDictionary: buildDictionary
    unsafeBuildDictionary: unsafeBuildDictionary
}