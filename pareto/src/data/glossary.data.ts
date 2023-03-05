import * as pd from 'pareto-core-data'

import {
    string,
    null_,
    nested,
    dictionary, member, taggedUnion, types, group,
    array,
    typeReference,
    data,
    func,
    type,
    optional,
    reference,
    glossaryParameter,
    builderMethod,
    builderReference,
    number,
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as gglossary from "lib-pareto-typescript-project/dist/submodules/glossary"
const d = pd.d

export const $: gglossary.T.Glossary<pd.SourceLocation> = {
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
    'builders': d({
        "Add": builderMethod(typeReference("KeyValuePair")),
        "Push": builderMethod(typeReference("Type")),
        "OnDuplicate": builderMethod(typeReference("common", "String")),
    }),
    'interfaces': d({
    }),
    'functions': d({
        "BuildArray": func(typeReference("common", "Null"), builderReference("Push"), null, data(typeReference("Array"), false)),
        "UnsafeBuildDictionary": func(typeReference("common", "Null"), builderReference("Add"), null, data(typeReference("Dictionary"), false)),
        "BuildDictionary": func(typeReference("DictionaryBuildStrategy"), builderReference("Add"), builderReference("OnDuplicate"), data(typeReference("Dictionary"), false)),
    }),
}