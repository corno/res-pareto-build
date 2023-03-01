import * as pi from 'pareto-core-internals'

import * as gapi from "../api"

import { CunsafeBuildDictionary } from "../api"

export const $$: CunsafeBuildDictionary = <T>($: null, $c: ($i: gapi.IAdd<T>) => void) => {
    const out: {[key:string]: T} = {}
    $c(($) => {
        if (out[$.key] !== undefined) {
            pi.panic(`entry '${$.key}' already exists`)
        }
        out[$.key] = $.value
    })
    return pi.wrapRawDictionary(out)
}