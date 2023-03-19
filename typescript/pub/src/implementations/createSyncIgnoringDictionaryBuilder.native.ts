import * as pi from 'pareto-core-internals'

import * as g_this from "../glossary"

import { A } from "../api.generated"

export const $$: A.createSyncIgnoringDictionaryBuilder = ($d, $se) => {
    return <T>($c: ($i: g_this.SYNC.I.Add<T>) => void) => {
        const out: { [key: string]: T } = {}
        $c(($) => {
            if (out[$.key] === undefined) {
                out[$.key] = $.value
            } else {
                $se.onDuplicate($.key)
            }
        })
        return pi.wrapRawDictionary(out)
    }
}