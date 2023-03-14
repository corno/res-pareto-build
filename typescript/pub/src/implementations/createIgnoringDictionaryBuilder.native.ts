import * as pi from 'pareto-core-internals'

import * as g_this from "../glossary"

import { createIgnoringDictionaryBuilder } from "../api.generated"

export const $$: createIgnoringDictionaryBuilder = ($d) => {
    return <T>($c: ($i: g_this.B.Add<T>) => void) => {
        const out: { [key: string]: T } = {}
        $c(($) => {
            if (out[$.key] === undefined) {
                out[$.key] = $.value
            } else {
                $d.onDuplicate($.key)
            }
        })
        return pi.wrapRawDictionary(out)
    }
}