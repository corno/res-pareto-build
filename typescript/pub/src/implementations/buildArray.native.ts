import * as pi from 'pareto-core-internals'

import * as g_this from "../glossary"

import { buildArray } from "../api.generated"

export const $$: buildArray = <T>($c: ($i: g_this.B.Push<T>) => void) => {
    const out: T[] = []
    $c(($) => {
        out.push($)
    })
    return pi.wrapRawArray(out)
}