import * as pi from 'pareto-core-internals'

import * as gapi from "../api"

import { CbuildArray } from "../api"

export const $$: CbuildArray = <T>($: null, $c: ($i: gapi.IPush<T>) => void) => {
    const out: T[] = []
    $c(($) => {
        out.push($)
    })
    return pi.wrapRawArray(out)
}