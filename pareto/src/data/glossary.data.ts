import * as pd from 'pareto-core-data'

import {
    constructor,
    aInterfaceMethod,
    aInterfaceReference,
    array, dictionary, externalTypeReference, glossaryParameter, group, imp, inf, member,
    sfunction,
    sInterfaceMethod, sInterfaceReference, streamconsumer, string, taggedUnion, type, typeReference
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
        'interfaces': d({
            "Array": aInterfaceMethod(typeReference("Array")),
            "Dictionary": aInterfaceMethod(typeReference("Dictionary")),
            "Elements": streamconsumer(
                aInterfaceMethod(typeReference("Type")),
                aInterfaceMethod(null),
            ),
            "Entries": streamconsumer(
                aInterfaceMethod(typeReference("KeyValuePair")),
                aInterfaceMethod(null),
            ),
            "DuplicatesHandler": streamconsumer(
                aInterfaceMethod(externalTypeReference("common", "String")),
                aInterfaceMethod(null),
            ),
        }),
        'algorithms': d({
            "CreateArrayBuilder": constructor(aInterfaceReference("Elements"), {
                "handler": aInterfaceReference("Array"),
            }),
            "CreateUnsafeDictionaryBuilder": constructor(aInterfaceReference("Entries"), {
                "handler": aInterfaceReference("Dictionary"),
            }),
            "CreateSafeDictionaryBuilder": constructor(aInterfaceReference("Entries"), {
                "handler": aInterfaceReference("Dictionary"),
                "duplicatesHandler": aInterfaceReference("DuplicatesHandler"),

            }),
        }),
        
    },
    'synchronous': {
        'interfaces': d({
            "Add": sInterfaceMethod(typeReference("KeyValuePair")),
            "Push": sInterfaceMethod(typeReference("Type")),

        }),
        'algorithms': d({
            "BuildArray": sfunction(typeReference("Array"), inf(sInterfaceReference("Push"))),
            "BuildDictionary": sfunction(typeReference("Dictionary"), inf(sInterfaceReference("Add"))),
        }),
    },

}