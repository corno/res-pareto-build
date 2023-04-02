import * as pt from 'pareto-core-types'

import * as g_common from "glo-pareto-common"

export namespace N {}

export namespace T {
    
    export namespace Array {
        
        export type array<TEndType, TType> = g_common.T.Array<TType>
        
        export type end<TEndType, TType> = TEndType
    }
    
    export type Array<TEndType, TType> = {
        readonly 'array': g_common.T.Array<TType>
        readonly 'end': TEndType
    }
    
    export namespace Dictionary {
        
        export type dictionary<TEndType, TType> = g_common.T.Dictionary<TType>
        
        export type end<TEndType, TType> = TEndType
    }
    
    export type Dictionary<TEndType, TType> = {
        readonly 'dictionary': g_common.T.Dictionary<TType>
        readonly 'end': TEndType
    }
    
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