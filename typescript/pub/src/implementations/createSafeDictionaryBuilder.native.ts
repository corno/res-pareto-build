import * as pi from 'pareto-core-internals'

import * as g_this from "../glossary"

import { A } from "../api.generated"

export const $$: A.createSafeDictionaryBuilder = ($c) => {
    return {
        'construct': <GEndType, GType>(
            $is: {
                'duplicatesHandler': g_this.ASYNC.I.DuplicatesHandler
                'handler': g_this.ASYNC.I.Dictionary<GEndType, GType>
            }
        ): g_this.ASYNC.I.Entries<GEndType, GType> => {
            const dict: { [key: string]: GType } = {}
            return {
                'data': ($) => {
                    if (dict[$.key] !== undefined) {
                        const x = $
                        switch ($c[0]) {
                            case 'ignore':
                                pi.cc($c[1], ($) => {
    
                                })
                                break
                            case 'overwrite':
                                pi.cc($c[1], ($) => {
                                    dict[x.key] = x.value
                                })
                                break
                            default: pi.au($c[0])
                        }
                        $is.duplicatesHandler.data($.key)
    
                    } else {
                        dict[$.key] = $.value
                    }
                },
                'end': ($) => {
                    $is.handler({
                        'dictionary': pi.wrapRawDictionary(dict),
                        'end': $,
                    })
                    $is.duplicatesHandler.end()
                }
            }
        }
    }
}