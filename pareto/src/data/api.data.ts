import * as pd from 'pareto-core-data'

import { aconstructor, algorithm, dependent, sfunction, sSideEffect } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"

import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"

const d = pd.d

export const $: g_project.T.ModuleDefinition.api.root<pd.SourceLocation> ={
    'algorithms': d({
        "buildArray": algorithm(sfunction("this", {}, "BuildArray")),
        "unsafeSyncBuildDictionary": algorithm(sfunction("this", {}, "BuildDictionary")),
        "createSyncOverwritingDictionaryBuilder": algorithm(sfunction("this", {}, "BuildDictionary"), dependent(null, { //<-- cannot use 'DictionaryBuildStrategy' yet. It needs a (bogus) parameter
        }, {
            "onDuplicate": sSideEffect("common", {}, "String"),
        })),
        "createSyncIgnoringDictionaryBuilder": algorithm(sfunction("this", {}, "BuildDictionary"), dependent(null, {
        }, {
            "onDuplicate": sSideEffect("common", {}, "String"),
        })),
        "createUnsafeAsyncDictionaryBuilder": algorithm(aconstructor("this", {}, "CreateUnsafeDictionaryBuilder")),
        "createAsyncOverwritingDictionaryBuilder": algorithm(aconstructor("this", {}, "CreateSafeDictionaryBuilder")),
        "createAsyncIgnoringDictionaryBuilder": algorithm(aconstructor("this", {}, "CreateSafeDictionaryBuilder")),
        "createAsyncArrayBuilder": algorithm(aconstructor("this", {}, "CreateArrayBuilder")),
    }),
}