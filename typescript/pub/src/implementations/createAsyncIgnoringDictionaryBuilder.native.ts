import * as pi from 'pareto-core-internals'

import * as g_this from "../glossary"

import { A } from "../api.generated"

export const $$: A.createAsyncIgnoringDictionaryBuilder = <GType>(
    $is: {
        'duplicatesHandler': g_this.ASYNC.I.DuplicatesHandler<GType>
        'handler': g_this.ASYNC.I.Dictionary<GType>
    }
): g_this.ASYNC.I.Entries<GType> => {
    const dict: { [key: string]: GType } = {}
    return {
        'data': ($) => {
            if (dict[$.key] !== undefined) {
                $is.duplicatesHandler.data($.key)
            } else {
                dict[$.key] = $.value
            }
        },
        'end': () => {
            $is.handler(pi.wrapRawDictionary(dict))
            $is.duplicatesHandler.end()
        }
    }
}