import * as pd from 'pareto-core-data'

import { aconstructor, algorithm, dependent, sfunction, sSideEffect } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"

import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"

const d = pd.d

export const $: g_project.T.ModuleDefinition.api.root<pd.SourceLocation> = {
    'algorithms': d({
        "buildArray": algorithm(sfunction("this", {}, "BuildArray"), { "Annotation": "Annotation" }),
        "unsafeSyncBuildDictionary": algorithm(sfunction("this", {}, "BuildDictionary"), { "Annotation": "Annotation" }),
        "createSyncOverwritingDictionaryBuilder": algorithm(sfunction("this", {}, "BuildDictionary"), { "Annotation": "Annotation" }, dependent(null, { //<-- cannot use 'DictionaryBuildStrategy' yet. It needs a (bogus) parameter
        }, {
            "onDuplicate": sSideEffect("common", {}, "String"),
        })),
        "createSyncIgnoringDictionaryBuilder": algorithm(sfunction("this", {}, "BuildDictionary"), { "Annotation": "Annotation" }, dependent(null, {
        }, {
            "onDuplicate": sSideEffect("common", {}, "String"),
        })),
        "createUnsafeAsyncDictionaryBuilder": algorithm(aconstructor("this", {}, "CreateUnsafeDictionaryBuilder"), { "Annotation": "Annotation" }),
        "createAsyncOverwritingDictionaryBuilder": algorithm(aconstructor("this", {}, "CreateSafeDictionaryBuilder"), { "Annotation": "Annotation" }),
        "createAsyncIgnoringDictionaryBuilder": algorithm(aconstructor("this", {}, "CreateSafeDictionaryBuilder"), { "Annotation": "Annotation" }),
        "createAsyncArrayBuilder": algorithm(aconstructor("this", {}, "CreateArrayBuilder"), { "Annotation": "Annotation" }),
    }),
}