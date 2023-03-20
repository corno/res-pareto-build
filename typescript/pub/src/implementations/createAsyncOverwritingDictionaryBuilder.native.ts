import * as pi from 'pareto-core-internals'

import * as g_this from "../glossary"

import { A } from "../api.generated"

export const $$: A.createAsyncOverwritingDictionaryBuilder = <GAnnotation>(): g_this.ASYNC.A.C.CreateSafeDictionaryBuilder<GAnnotation> => {
    return ($is) => {
        const dict: { [key: string]: GAnnotation } = {}
        return {
            'data': ($) => {
                if (dict[$.key] !== undefined) {
                    $is.duplicatesHandler.data($.key)
                }
                dict[$.key] = $.value
            },
            'end': () => {
                $is.handler(pi.wrapRawDictionary(dict))
                $is.duplicatesHandler.end()
            }
        }
    }
}