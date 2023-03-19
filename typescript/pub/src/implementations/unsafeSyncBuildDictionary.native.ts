import * as pi from 'pareto-core-internals'

import * as g_this from "../glossary"

import { A } from "../api.generated"

export const $$: A.unsafeSyncBuildDictionary = <T>($c: ($i: g_this.SYNC.I.Add<T>) => void) => {
    const out: {[key:string]: T} = {}
    $c(($) => {
        if (out[$.key] !== undefined) {
            pi.panic(`entry '${$.key}' already exists`)
        }
        out[$.key] = $.value
    })
    return pi.wrapRawDictionary(out)
}