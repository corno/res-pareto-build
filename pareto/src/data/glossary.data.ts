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
    glossaryParameter,
    builderMethod,
    builderReference,
    number,
    externalTypeReference,
    imp,
    bldr,
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
    'type': ['synchronous', {
        'builders': d({
            "Add": builderMethod(typeReference("KeyValuePair")),
            "Push": builderMethod(typeReference("Type")),
        }),
        'functions': d({
            "BuildArray": sfunc(bldr(builderReference("Push")), sdata(typeReference("Array"))),
            "UnsafeBuildDictionary": sfunc(bldr(builderReference("Add")), sdata(typeReference("Dictionary"))),
            "BuildDictionary": sfunc(bldr( builderReference("Add")), sdata(typeReference("Dictionary"))),
        }),

    }],
}