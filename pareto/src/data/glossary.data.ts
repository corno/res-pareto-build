import * as pd from 'pareto-core-data'

import {
    array, dictionary, glossaryParameter, group, imp, inf, member, sfunc, sInterfaceMethod, sInterfaceReference, string, taggedUnion, type, typeReference
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"
const d = pd.d

export const $: g_glossary.T.Glossary<pd.SourceLocation> = {
    'parameters': d({
        "Type": null,
    }),
    'imports': d({
        "common": imp({}),
    }),
    'types': d({
        "Array": type(array(glossaryParameter("Type"))),
        "Dictionary": type(dictionary(glossaryParameter("Type"))),
        "KeyValuePair": type(group({
            "key": member(string()),
            "value": member(glossaryParameter("Type")),
        })),
        "Type": type(glossaryParameter("Type")),
        "DictionaryBuildStrategy": type(taggedUnion({
            "ignore": group({}),
            "overwrite": group({}),
        })),
    }),
    'asynchronous': {
        'interfaces': d({}),
        'constructors': d({}),
        'functions': d({}),
    },
    'synchronous': {
        'interfaces': d({
            "Add": sInterfaceMethod(typeReference("KeyValuePair")),
            "Push": sInterfaceMethod(typeReference("Type")),

        }),
        'constructors': d({}),
        'functions': d({
            "BuildArray": sfunc(inf(sInterfaceReference("Push")), typeReference("Array")),
            "UnsafeBuildDictionary": sfunc(inf(sInterfaceReference("Add")), typeReference("Dictionary")),
            "BuildDictionary": sfunc(inf(sInterfaceReference("Add")), typeReference("Dictionary")),

        }),
    },

}