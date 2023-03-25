import * as pd from 'pareto-core-data'

import { constructor, algorithm, dependent, sfunction, sSideEffect, data } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"

import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"

const d = pd.d

export const $: g_project.T.ModuleDefinition.api.root<pd.SourceLocation> = {
    'algorithms': d({
        "buildArray": algorithm(sfunction("this", {}, "BuildArray")),
        "buildUnsafeDictionary": algorithm(sfunction("this", {}, "BuildUnsafeDictionary")),
        "buildSafeDictionary": algorithm(sfunction("this", {}, "BuildSafeDictionary"), {}, dependent(data("this", {}, "DictionaryBuildStrategy"), {}, {
            "onDuplicate": sSideEffect("common", {}, "String"),
        })),
        "createUnsafeDictionaryBuilder": algorithm(constructor("this", {}, "CreateUnsafeDictionaryBuilder")),
        "createSafeDictionaryBuilder": algorithm(constructor("this", {}, "CreateSafeDictionaryBuilder"), {}, dependent(data("this", {}, "DictionaryBuildStrategy"), {}, {})),
        "createArrayBuilder": algorithm(constructor("this", {}, "CreateArrayBuilder")),
    }),
}