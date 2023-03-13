import * as pd from 'pareto-core-data'

import {
    string,
    null_,
    nested,
    dictionary, member, taggedUnion, types, group,
    array,
    typeReference,
    sdata,
    sfunc,
    type,
    optional,
    reference,
    glossaryParameter,
    builderMethod,
    builderReference,
    number,
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"
const d = pd.d

export const $: g_glossary.T.Glossary<pd.SourceLocation> = {
    'parameters': d({
        "Type": null,
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
    'type': ['synchronous', {
        'builders': d({
            "Add": builderMethod(typeReference("KeyValuePair")),
            "Push": builderMethod(typeReference("Type")),
            "OnDuplicate": builderMethod(typeReference("common", "String")),
        }),
        'functions': d({
            "OnDuplicate": sfunc(typeReference("common", "Null"), builderReference("OnDuplicate"), null, null),
            "BuildArray": sfunc(typeReference("common", "Null"), builderReference("Push"), null, sdata(typeReference("Array"))),
            "UnsafeBuildDictionary": sfunc(typeReference("common", "Null"), builderReference("Add"), null, sdata(typeReference("Dictionary"))),
            "BuildDictionary": sfunc(typeReference("DictionaryBuildStrategy"), builderReference("Add"), null, sdata(typeReference("Dictionary"))),
        }),

    }],
}