import * as pt from 'pareto-core-types'

import * as gcommon from "glo-pareto-common"

export namespace T {
    
    export namespace Array {
        
        export type A<GPType> = GPType
    }
    
    export type Array<GPType> = pt.Array<GPType>
    
    export namespace Dictionary {
        
        export type D<GPType> = GPType
    }
    
    export type Dictionary<GPType> = pt.Dictionary<GPType>
    
    export namespace DictionaryBuildStrategy {
        
        export namespace ignore {}
        
        export type ignore<GPType> = null
        
        export namespace overwrite {}
        
        export type overwrite<GPType> = null
    }
    
    export type DictionaryBuildStrategy<GPType> = 
        | ['ignore', null]
        | ['overwrite', null]
    
    export namespace KeyValuePair {
        
        export type key<GPType> = string
        
        export type value<GPType> = GPType
    }
    
    export type KeyValuePair<GPType> = {
        readonly 'key': string
        readonly 'value': GPType
    }
    
    export type Type<GPType> = GPType
}