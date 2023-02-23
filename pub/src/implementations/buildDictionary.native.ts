import * as pi from 'pareto-core-internals'

import * as gapi from "../api"

import { CbuildDictionary } from "../api"

export const $$: CbuildDictionary = <T>($: null, $c: ($i: gapi.IAdd<T>) => void) => {
    const out: {[key:string]: T} = {}
    $c(($) => {
        out[$.key] = $.value
    })
    return pi.wrapRawDictionary(out)
}