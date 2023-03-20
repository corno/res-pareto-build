import * as pi from 'pareto-core-internals'

import * as g_this from "../glossary"

import { A } from "../api.generated"

export const $$: A.unsafeSyncBuildDictionary = <GAnnotation>(): g_this.SYNC.A.F.BuildDictionary<GAnnotation> => {
    return ($c) => {
        const out: { [key: string]: GAnnotation } = {}
        $c(($) => {
            if (out[$.key] !== undefined) {
                pi.panic(`entry '${$.key}' already exists`)
            }
            out[$.key] = $.value
        })
        return pi.wrapRawDictionary(out)
    }
}