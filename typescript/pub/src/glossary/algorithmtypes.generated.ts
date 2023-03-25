import * as pt from 'pareto-core-types'

import { T } from "./datatypes.generated"

import * as g_common from "glo-pareto-common"

export namespace ASYNC {
    
    export namespace I {
        
        export type Array<TType> = ($: T.Array<TType>, ) => void
        
        export type Dictionary<TType> = ($: T.Dictionary<TType>, ) => void
        
        export type DuplicatesHandler = {
            'data': ($: g_common.T.String, ) => void
            'end': () => void
        }
        
        export type Elements<TType> = {
            'data': ($: TType, ) => void
            'end': () => void
        }
        
        export type Entries<TType> = {
            'data': ($: T.KeyValuePair<TType>, ) => void
            'end': () => void
        }
    }
    
    export namespace A {
        
        
        export namespace C {
            export type CreateArrayBuilder = <TType>($is: {
                readonly 'handler': ASYNC.I.Array<TType>
            }) => ASYNC.I.Elements<TType>
        }
        
        
        export namespace C {
            export type CreateSafeDictionaryBuilder = <TType>($is: {
                readonly 'duplicatesHandler': ASYNC.I.DuplicatesHandler
                readonly 'handler': ASYNC.I.Dictionary<TType>
            }) => ASYNC.I.Entries<TType>
        }
        
        
        export namespace C {
            export type CreateUnsafeDictionaryBuilder = <TType>($is: {
                readonly 'handler': ASYNC.I.Dictionary<TType>
            }) => ASYNC.I.Entries<TType>
        }
    }
}

export namespace SYNC {
    
    export namespace I {
        
        export type Add<TType> = ($: T.KeyValuePair<TType>, ) => void
        
        export type Push<TType> = ($: TType, ) => void
    }
    
    export namespace A {
        
        
        export namespace F {
            export type BuildArray = <TType>($c: ($i: SYNC.I.Push<TType>) => void) => T.Array<TType>
        }
        
        
        export namespace F {
            export type BuildSafeDictionary = <TType>($c: ($i: SYNC.I.Add<TType>) => void) => T.Dictionary<TType>
        }
        
        
        export namespace F {
            export type BuildUnsafeDictionary = <TType>($c: ($i: SYNC.I.Add<TType>) => void) => T.Dictionary<TType>
        }
    }
}