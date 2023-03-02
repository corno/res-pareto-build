import * as pi from 'pareto-core-internals'

import * as gapi from "../definition/glossary"

import { CbuildDictionary } from "../definition/api.generated"

export const $$: CbuildDictionary = <T>($: gapi.T.DictionaryBuildStrategy<T>, $c: ($i: gapi.IAdd<T>) => void, $i: gapi.IOnDuplicate<T>) => {
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