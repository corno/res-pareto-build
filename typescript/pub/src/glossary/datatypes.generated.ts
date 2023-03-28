import * as pt from 'pareto-core-types'

import * as g_common from "glo-pareto-common"

export namespace N {}

export namespace T {
    
    export namespace Array {
        
        export type A<TType> = TType
    }
    
    export type Array<TType> = pt.Array<TType>
    
    export namespace Dictionary {
        
        export type D<TType> = TType
    }
    
    export type Dictionary<TType> = pt.Dictionary<TType>
    
    export namespace DictionaryBuildStrategy {
        
        export namespace ignore {}
        
        export type ignore = null
        
        export namespace overwrite {}
        
        export type overwrite = null
    }
    
    export type DictionaryBuildStrategy = 
        | ['ignore', null]
        | ['overwrite', null]
    
    export namespace KeyValuePair {
        
        export type key<TType> = string
        
        export type value<TType> = TType
    }
    
    export type KeyValuePair<TType> = {
        readonly 'key': string
        readonly 'value': TType
    }
}