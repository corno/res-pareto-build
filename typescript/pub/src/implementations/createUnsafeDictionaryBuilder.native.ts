import * as pi from 'pareto-core-internals'

import * as g_this from "../glossary"

import { A } from "../api.generated"

export const $$: A.createUnsafeDictionaryBuilder = () => {
    return {
        'construct': <GType>(
            $is: {
                handler: g_this.ASYNC.I.Dictionary<GType>
            }
        ): g_this.ASYNC.I.Entries<GType> => {
            const dict: { [key: string]: GType } = {}
            return {
                'data': ($) => {
                    if (dict[$.key] !== undefined) {
                        pi.panic(`duplicate key: ${$.key}`)
                    }
                    dict[$.key] = $.value
                },
                'end': () => {
                    $is.handler(pi.wrapRawDictionary(dict))
                }
            }
        }
    }
}