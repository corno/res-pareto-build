import * as pi from 'pareto-core-internals'

import * as g_this from "../glossary"

import { A } from "../api.generated"

export const $$: A.buildArray = <T>($c: ($i: g_this.SYNC.I.Push<T>) => void) => {
    const out: T[] = []
    $c(($) => {
        out.push($)
    })
    return pi.wrapRawArray(out)
}