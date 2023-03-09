import * as pi from 'pareto-core-internals'

import * as gapi from "../glossary"

import { buildDictionary } from "../api.generated"

export const $$: buildDictionary = <T>($: gapi.T.DictionaryBuildStrategy<T>, $c: ($i: gapi.B.Add<T>) => void, $i: gapi.B.OnDuplicate<T>) => {
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
            $i($.key)
        }
    })
    return pi.wrapRawDictionary(out)
}