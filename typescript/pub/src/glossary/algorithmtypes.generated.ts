import * as pt from 'pareto-core-types'

import { T } from "./datatypes.generated"

import * as g_common from "glo-pareto-common"

export namespace ASYNC {
    
    export namespace I {
        
        export type Array<GType> = ($: T.Array<GType>, ) => void
        
        export type Dictionary<GType> = ($: T.Dictionary<GType>, ) => void
        
        export type DuplicatesHandler<GType> = {
            'data': ($: g_common.T.String, ) => void
            'end': () => void
        }
        
        export type Elements<GType> = {
            'data': ($: T.Type<GType>, ) => void
            'end': () => void
        }
        
        export type Entries<GType> = {
            'data': ($: T.KeyValuePair<GType>, ) => void
            'end': () => void
        }
    }
    
    export namespace A {
        
        
        export namespace C {
            export type CreateArrayBuilder = <GType>($is: {
                readonly 'handler': ASYNC.I.Array<GType>
            }) => ASYNC.I.Elements<GType>
        }
        
        
        export namespace C {
            export type CreateSafeDictionaryBuilder = <GType>($is: {
                readonly 'duplicatesHandler': ASYNC.I.DuplicatesHandler<GType>
                readonly 'handler': ASYNC.I.Dictionary<GType>
            }) => ASYNC.I.Entries<GType>
        }
        
        
        export namespace C {
            export type CreateUnsafeDictionaryBuilder = <GType>($is: {
                readonly 'handler': ASYNC.I.Dictionary<GType>
            }) => ASYNC.I.Entries<GType>
        }
    }
}

export namespace SYNC {
    
    export namespace I {
        
        export type Add<GType> = ($: T.KeyValuePair<GType>, ) => void
        
        export type Push<GType> = ($: T.Type<GType>, ) => void
    }
    
    export namespace IW {
        
        export type Add<GType> = ($c: ($b: I.Add<GType>) => void) => void
        
        export type Push<GType> = ($c: ($b: I.Push<GType>) => void) => void
    }
    
    export namespace A {
        
        
        export namespace F {
            export type BuildArray = <GType>($c: ($b: SYNC.I.Push<GType>) => void) => T.Array<GType>
        }
        
        
        export namespace F {
            export type BuildDictionary = <GType>($c: ($b: SYNC.I.Add<GType>) => void) => T.Dictionary<GType>
        }
    }
}