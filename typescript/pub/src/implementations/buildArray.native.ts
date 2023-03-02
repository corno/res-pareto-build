import * as pi from 'pareto-core-internals'

import * as gapi from "../definition/glossary"

import { CbuildArray } from "../definition/api.generated"

export const $$: CbuildArray = <T>($: null, $c: ($i: gapi.IPush<T>) => void) => {
    const out: T[] = []
    $c(($) => {
        out.push($)
    })
    return pi.wrapRawArray(out)
}