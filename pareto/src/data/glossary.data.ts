import * as pd from 'pareto-core-data'

import {
    aconstructor,
    aInterfaceMethod,
    aInterfaceReference,
    array, dictionary, externalTypeReference, glossaryParameter, group, imp, inf, member,
    sfunction,
    sInterfaceMethod, sInterfaceReference, stream, string, taggedUnion, type, typeReference
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
            "Elements": stream(
                aInterfaceMethod(typeReference("Type")),
                aInterfaceMethod(null),
            ),
            "Entries": stream(
                aInterfaceMethod(typeReference("KeyValuePair")),
                aInterfaceMethod(null),
            ),
            "DuplicatesHandler": stream(
                aInterfaceMethod(externalTypeReference("common", "String")),
                aInterfaceMethod(null),
            ),
        }),
        'constructors': d({
            "CreateArrayBuilder": aconstructor(aInterfaceReference("Elements"), {
                "handler": aInterfaceReference("Array"),
            }),
            "CreateUnsafeDictionaryBuilder": aconstructor(aInterfaceReference("Entries"), {
                "handler": aInterfaceReference("Dictionary"),
            }),
            "CreateSafeDictionaryBuilder": aconstructor(aInterfaceReference("Entries"), {
                "handler": aInterfaceReference("Dictionary"),
                "duplicatesHandler": aInterfaceReference("DuplicatesHandler"),

            }),
        }),
        'functions': d({}),
    },
    'synchronous': {
        'interfaces': d({
            "Add": sInterfaceMethod(typeReference("KeyValuePair")),
            "Push": sInterfaceMethod(typeReference("Type")),

        }),
        'constructors': d({}),
        'functions': d({
            "BuildArray": sfunction(inf(sInterfaceReference("Push")), typeReference("Array")),
            "BuildDictionary": sfunction(inf(sInterfaceReference("Add")), typeReference("Dictionary")),
        }),
    },

}