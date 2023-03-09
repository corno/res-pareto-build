import * as pi from 'pareto-core-internals'

import * as gapi from "../glossary"

import { buildArray } from "../api.generated"

export const $$: buildArray = <T>($: null, $c: ($i: gapi.B.Push<T>) => void) => {
    const out: T[] = []
    $c(($) => {
        out.push($)
    })
    return pi.wrapRawArray(out)
}