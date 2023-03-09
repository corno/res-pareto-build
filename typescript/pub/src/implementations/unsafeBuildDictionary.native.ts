import * as pi from 'pareto-core-internals'

import * as gapi from "../glossary"

import { unsafeBuildDictionary } from "../api.generated"

export const $$: unsafeBuildDictionary = <T>($: null, $c: ($i: gapi.B.Add<T>) => void) => {
    const out: {[key:string]: T} = {}
    $c(($) => {
        if (out[$.key] !== undefined) {
            pi.panic(`entry '${$.key}' already exists`)
        }
        out[$.key] = $.value
    })
    return pi.wrapRawDictionary(out)
}