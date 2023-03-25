import * as pi from 'pareto-core-internals'

import * as g_this from "../glossary"

import { A } from "../api.generated"

export const $$: A.createArrayBuilder = () => {
    return <GType>(
        $is: {
            handler: g_this.ASYNC.I.Array<GType>
        }
    ): g_this.ASYNC.I.Elements<GType> => {
        const arr: GType[] = []
        return {
            'data': ($) => {
                arr.push($)
            },
            'end': () => {
                $is.handler(pi.wrapRawArray(arr))
            }
        }
    }
}