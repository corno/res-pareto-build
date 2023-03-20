
import * as ps from 'pareto-core-state'
import * as pa from 'pareto-core-async'

import * as g_test from "lib-pareto-test"

import * as g_pub from "../../../../../pub"

import { getTestSet } from "../api.generated"

export const $$: getTestSet = () => {

    const builder = ps.createUnsafeDictionaryBuilder<g_test.T.TestElement>()


    return pa.asyncValue({
        elements: builder.getDictionary()
    })
}