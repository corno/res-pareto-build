import * as pi from 'pareto-core-internals'

import * as g_this from "../glossary"

import { A } from "../api.generated"

export const $$: A.createSyncDictionaryBuilder = ($x, $se) => {
    return <T>($c: ($i: g_this.SYNC.I.Add<T>) => void) => {
        const out: { [key: string]: T } = {}
        $c(($) => {
            if (out[$.key] === undefined) {
                out[$.key] = $.value
            } else {
                const x = $
                switch ($x[0]) {
                    case 'ignore':
                        pi.cc($x[1], ($) => {

                        })
                        break
                    case 'overwrite':
                        pi.cc($x[1], ($) => {
                            out[x.key] = x.value
                        })
                        break
                    default: pi.au($x[0])
                }
                $se.onDuplicate($.key)
            }
        })
        return pi.wrapRawDictionary(out)
    }
}