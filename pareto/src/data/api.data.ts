import * as pd from 'pareto-core-data'

import {
    string,
    nested,
    array,
    typeReference,
    interfaceReference,
    null_,
    method,
    number, dictionary, group, member, taggedUnion, types, func, data, type, optional, glossaryParameter, reference,
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import { definitionReference, constructor, algorithm } from "lib-pareto-typescript-project/dist/submodules/moduleDefinition/shorthands"

import * as gmoduleDefinition from "lib-pareto-typescript-project/dist/submodules/moduleDefinition"

const d = pd.d

export const $: gmoduleDefinition.T.ModuleDefinition<pd.SourceLocation> = {
    'glossary': {
        'imports': d({
            "common": "glo-pareto-common",
        }),
        'parameters': d({
            "Type": {},
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
    },
    'api': {
        'imports': d({
        }),
        'algorithms': d({
            "buildArray": algorithm(definitionReference("BuildArray")),
            "unsafeBuildDictionary": algorithm(definitionReference("UnsafeBuildDictionary")),
            "buildDictionary": algorithm(definitionReference("BuildDictionary")),
        })
    },
}