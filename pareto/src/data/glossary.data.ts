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
    method,
    interfaceReference,
    number,
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as gglossary from "lib-pareto-typescript-project/dist/submodules/glossary"
const d = pd.d

export const $: gglossary.T.Glossary<pd.SourceLocation> = {
    'imports': d({
        "common": "glo-pareto-common",
    }),
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
        }))
    }),
    'interfaces': d({
        "Add": method(typeReference("KeyValuePair")),
        "Push": method(typeReference("Type")),
        "OnDuplicate": method(typeReference("common", "String")),
    }),
    'functions': d({
        "BuildArray": func(typeReference("common", "Null"), interfaceReference("Push"), null, data(typeReference("Array"), false)),
        "UnsafeBuildDictionary": func(typeReference("common", "Null"), interfaceReference("Add"), null, data(typeReference("Dictionary"), false)),
        "BuildDictionary": func(typeReference("DictionaryBuildStrategy"), interfaceReference("Add"), interfaceReference("OnDuplicate"), data(typeReference("Dictionary"), false)),
    }),
}