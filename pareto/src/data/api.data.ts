import * as pd from 'pareto-core-data'

import { functionReference, constructor, algorithm, typeReference, bldrRef } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"

import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"

const d = pd.d

export const $: g_project.T.Module.api.root<pd.SourceLocation> ={
    'algorithms': d({
        "buildArray": algorithm(functionReference("this", {}, "BuildArray")),
        "unsafeBuildDictionary": algorithm(functionReference("this", {}, "UnsafeBuildDictionary")),
        "createOverwritingDictionaryBuilder": algorithm(functionReference("this", {}, "BuildDictionary"), constructor(null, {
            "onDuplicate": bldrRef("common", {}, "String"),
        })),
        "createIgnoringDictionaryBuilder": algorithm(functionReference("this", {}, "BuildDictionary"), constructor(null, {
            "onDuplicate": bldrRef("common", {}, "String"),
        })),
    }),
}