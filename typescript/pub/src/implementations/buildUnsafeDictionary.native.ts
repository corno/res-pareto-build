import * as pi from 'pareto-core-internals'

import * as g_this from "../glossary"

import { A } from "../api.generated"

export const $$: A.buildUnsafeDictionary = (): g_this.SYNC.A.F.BuildUnsafeDictionary => {
    return <TType>($c: ($i: g_this.SYNC.I.Add<TType>) => void) => {
        const out: { [key: string]: TType } = {}
        $c(($) => {
            if (out[$.key] !== undefined) {
                pi.panic(`entry '${$.key}' already exists`)
            }
            out[$.key] = $.value
        })
        return pi.wrapRawDictionary(out)
    }
}