import * as pi from 'pareto-core-internals'

import * as g_this from "../glossary"

import { createDictionaryBuilder } from "../api.generated"

export const $$: createDictionaryBuilder = ($d) => {
    return <T>($: g_this.T.DictionaryBuildStrategy<T>, $c: ($i: g_this.B.Add<T>) => void) => {
        const dbs = $
        const out: { [key: string]: T } = {}
        $c(($) => {
            if (out[$.key] === undefined) {
                out[$.key] = $.value
            } else {
                const kv = $
                switch (dbs[0]) {
                    case 'ignore':
                        pi.cc(dbs[1], ($) => {
    
                        })
                        break
                    case 'overwrite':
                        pi.cc(dbs[1], ($) => {
                            out[kv.key] = kv.value
                        })
                        break
                    default: pi.au(dbs[0])
                }
                $d.onDuplicate(null, ($i) => {
                    $i($.key)
                })
            }
        })
        return pi.wrapRawDictionary(out)
    }
}