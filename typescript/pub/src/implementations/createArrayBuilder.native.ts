import * as pi from 'pareto-core-internals'

import * as g_this from "../glossary"

import { A } from "../api.generated"

export const $$: A.createArrayBuilder = () => {
    return {
        'construct': <GEndType, GType>(
            $is: {
                handler: g_this.ASYNC.I.Array<GEndType, GType>
            }
        ): g_this.ASYNC.I.Elements<GEndType, GType> => {
            const arr: GType[] = []
            return {
                'data': ($) => {
                    arr.push($)
                },
                'end': ($) => {
                    $is.handler({
                        'end': $,
                        'array': pi.wrapRawArray(arr)
                    })
                }
            }
        }
    }
}