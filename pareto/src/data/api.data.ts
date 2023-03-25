import * as pd from 'pareto-core-data'

import { constructor, algorithm, dependent, sfunction, sSideEffect, data } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"

import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"

const d = pd.d

export const $: g_project.T.ModuleDefinition.api.root<pd.SourceLocation> = {
    'algorithms': d({
        "buildArray": algorithm(sfunction("this", {}, "BuildArray")),
        "unsafeSyncBuildDictionary": algorithm(sfunction("this", {}, "BuildDictionary")),
        "createSyncDictionaryBuilder": algorithm(sfunction("this", {}, "BuildDictionary"), {}, dependent(data("this", {}, "DictionaryBuildStrategy"), {}, {
            "onDuplicate": sSideEffect("common", {}, "String"),
        })),
        "createUnsafeAsyncDictionaryBuilder": algorithm(constructor("this", {}, "CreateUnsafeDictionaryBuilder")),
        "createAsyncDictionaryBuilder": algorithm(constructor("this", {}, "CreateSafeDictionaryBuilder"), {}, dependent(data("this", {}, "DictionaryBuildStrategy"), {}, {})),
        "createAsyncArrayBuilder": algorithm(constructor("this", {}, "CreateArrayBuilder")),
    }),
}