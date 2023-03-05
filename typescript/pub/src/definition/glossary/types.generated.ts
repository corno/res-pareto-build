import * as pt from 'pareto-core-types'

import * as g_common from "glo-pareto-common"

export namespace T {
    
    export namespace Array {
        
        export type A<GType> = GType
    }
    
    export type Array<GType> = pt.Array<GType>
    
    export namespace Dictionary {
        
        export type D<GType> = GType
    }
    
    export type Dictionary<GType> = pt.Dictionary<GType>
    
    export namespace DictionaryBuildStrategy {
        
        export namespace ignore {}
        
        export type ignore<GType> = null
        
        export namespace overwrite {}
        
        export type overwrite<GType> = null
    }
    
    export type DictionaryBuildStrategy<GType> = 
        | ['ignore', null]
        | ['overwrite', null]
    
    export namespace KeyValuePair {
        
        export type key<GType> = string
        
        export type value<GType> = GType
    }
    
    export type KeyValuePair<GType> = {
        readonly 'key': string
        readonly 'value': GType
    }
    
    export type Type<GType> = GType
}