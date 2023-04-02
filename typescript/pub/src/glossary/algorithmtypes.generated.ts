import * as pt from 'pareto-core-types'

import { T } from "./datatypes.generated"

import * as g_common from "glo-pareto-common"

export namespace ASYNC {
    
    export namespace I {
        
        export type Array<TEndType, TType> = ($: T.Array<TEndType, TType>, ) => void
        
        export type Dictionary<TEndType, TType> = ($: T.Dictionary<TEndType, TType>, ) => void
        
        export type DuplicatesHandler = {
            'data': ($: g_common.T.String, ) => void
            'end': () => void
        }
        
        export type Elements<TEndType, TType> = {
            'data': ($: TType, ) => void
            'end': ($: TEndType, ) => void
        }
        
        export type Entries<TEndType, TType> = {
            'data': ($: T.KeyValuePair<TType>, ) => void
            'end': ($: TEndType, ) => void
        }
    }
    
    export namespace A {
        
        
        export namespace C {
            export type CreateArrayBuilder = {
                'construct': <TEndType, TType>($is: {
                    readonly 'handler': ASYNC.I.Array<TEndType, TType>
                }) => ASYNC.I.Elements<TEndType, TType>
            }
        }
        
        
        export namespace C {
            export type CreateSafeDictionaryBuilder = {
                'construct': <TEndType, TType>($is: {
                    readonly 'duplicatesHandler': ASYNC.I.DuplicatesHandler
                    readonly 'handler': ASYNC.I.Dictionary<TEndType, TType>
                }) => ASYNC.I.Entries<TEndType, TType>
            }
        }
        
        
        export namespace C {
            export type CreateUnsafeDictionaryBuilder = {
                'construct': <TEndType, TType>($is: {
                    readonly 'handler': ASYNC.I.Dictionary<TEndType, TType>
                }) => ASYNC.I.Entries<TEndType, TType>
            }
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
            export type BuildArray = <TType>($c: ($i: SYNC.I.Push<TType>) => void) => g_common.T.Array<TType>
        }
        
        
        export namespace F {
            export type BuildSafeDictionary = <TType>($c: ($i: SYNC.I.Add<TType>) => void) => g_common.T.Dictionary<TType>
        }
        
        
        export namespace F {
            export type BuildUnsafeDictionary = <TType>($c: ($i: SYNC.I.Add<TType>) => void) => g_common.T.Dictionary<TType>
        }
    }
}