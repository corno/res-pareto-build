import * as pd from 'pareto-core-data'

import { algorithm, dependent, sfunction, sSideEffect } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"

import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"

const d = pd.d

export const $: g_project.T.ModuleDefinition.api.root<pd.SourceLocation> ={
    'algorithms': d({
        "buildArray": algorithm(sfunction("this", {}, "BuildArray")),
        "unsafeBuildDictionary": algorithm(sfunction("this", {}, "UnsafeBuildDictionary")),
        "createOverwritingDictionaryBuilder": algorithm(sfunction("this", {}, "BuildDictionary"), dependent(null, {
        }, {
            "onDuplicate": sSideEffect("common", {}, "String"),
        })),
        "createIgnoringDictionaryBuilder": algorithm(sfunction("this", {}, "BuildDictionary"), dependent(null, {
        }, {
            "onDuplicate": sSideEffect("common", {}, "String"),
        })),
    }),
}