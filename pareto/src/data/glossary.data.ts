import * as pd from 'pareto-core-data'

import {
    constructor,
    aInterfaceMethod,
    aInterfaceReference,
    array, dictionary, externalTypeReference, ref, typeParameter, group, imp, inf, member,
    sfunction,
    sInterfaceMethod, sInterfaceReference, streamconsumer, string, taggedUnion, type, typeReference, aInterface, sInterface, parametrizedType
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"
const d = pd.d

export const $: g_glossary.T.Glossary<pd.SourceLocation> = {
    'parameters': d({}),
    'imports': d({
        "common": imp({}),
    }),
    'types': d({
        "Array": parametrizedType({ "Type": null }, array(ref(typeParameter("Type")))),
        "Dictionary": parametrizedType({ "Type": null }, dictionary(ref(typeParameter("Type")))),
        "KeyValuePair": parametrizedType({ "Type": null }, group({
            "key": member(string()),
            "value": member(ref(typeParameter("Type"))),
        })),
        "DictionaryBuildStrategy": type(taggedUnion({
            "ignore": group({}),
            "overwrite": group({}),
        })),
    }),
    'asynchronous': {
        'interfaces': d({
            "Array": aInterface(aInterfaceMethod(typeReference("Array", { "Type": typeParameter("Type") })), { "Type": null }),
            "Dictionary": aInterface(aInterfaceMethod(typeReference("Dictionary", { "Type": typeParameter("Type") })), { "Type": null }),
            "Elements": aInterface(streamconsumer(
                aInterfaceMethod(typeParameter("Type")),
                aInterfaceMethod(null),
            ), { "Type": null }),
            "Entries": aInterface(streamconsumer(
                aInterfaceMethod(typeReference("KeyValuePair", { "Type": typeParameter("Type") })),
                aInterfaceMethod(null),
            ), { "Type": null }),
            "DuplicatesHandler": aInterface(streamconsumer(
                aInterfaceMethod(externalTypeReference("common", "String")),
                aInterfaceMethod(null),
            )),
        }),
        'algorithms': d({
            "CreateArrayBuilder": constructor(aInterfaceReference("Elements", {"Type": typeParameter("Type")}), {
                "handler": aInterfaceReference("Array", {"Type": typeParameter("Type")}),
            }, {"Type": null}),
            "CreateUnsafeDictionaryBuilder": constructor(aInterfaceReference("Entries", {"Type": typeParameter("Type")}), {
                "handler": aInterfaceReference("Dictionary", {"Type": typeParameter("Type")}),
            }, {"Type": null}),
            "CreateSafeDictionaryBuilder": constructor(aInterfaceReference("Entries", {"Type": typeParameter("Type")}), {
                "handler": aInterfaceReference("Dictionary", {"Type": typeParameter("Type")}),
                "duplicatesHandler": aInterfaceReference("DuplicatesHandler"),

            }, {"Type": null}),
        }),

    },
    'synchronous': {
        'interfaces': d({
            "Add": sInterface(sInterfaceMethod(typeReference("KeyValuePair", { "Type": typeParameter("Type") })), { "Type": null }),
            "Push": sInterface(sInterfaceMethod(typeParameter("Type")), { "Type": null }),

        }),
        'algorithms': d({
            "BuildArray": sfunction(typeReference("Array", { "Type": typeParameter("Type") }), inf(sInterfaceReference("Push", {"Type": typeParameter("Type")})), { "Type": null }),
            "BuildUnsafeDictionary": sfunction(typeReference("Dictionary", { "Type": typeParameter("Type") }), inf(sInterfaceReference("Add", {"Type": typeParameter("Type")})), { "Type": null }),
            "BuildSafeDictionary": sfunction(typeReference("Dictionary", { "Type": typeParameter("Type") }), inf(sInterfaceReference("Add", {"Type": typeParameter("Type")})), { "Type": null }),
        }),
    },

}