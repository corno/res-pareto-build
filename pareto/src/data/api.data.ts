import * as pd from 'pareto-core-data'

import { functionReference, constructor, algorithm, typeReference } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"

import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"
const d = pd.d

export const $: g_project.T.Module.api.root<pd.SourceLocation> ={
    'algorithms': d({
        "buildArray": algorithm(functionReference("this", {}, "BuildArray")),
        "unsafeBuildDictionary": algorithm(functionReference("this", {}, "UnsafeBuildDictionary")),
        "createDictionaryBuilder": algorithm(functionReference("this", {}, "BuildDictionary"), constructor(null, {
            "onDuplicate": functionReference("this", {}, "OnDuplicate"),
        })),
    }),
}