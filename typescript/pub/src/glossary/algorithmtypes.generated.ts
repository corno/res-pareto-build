import * as pt from 'pareto-core-types'

import { T } from "./datatypes.generated"

import * as g_common from "glo-pareto-common"

export namespace ASYNC {
    
    export namespace I {}
    
    export namespace C {}
    
    export namespace F {}
}

export namespace SYNC {
    
    export namespace I {
        
        export type Add<GType> = ($: T.KeyValuePair<GType>, ) => void
        
        export type Push<GType> = ($: T.Type<GType>, ) => void
    }
    
    export namespace I2 {
        
        export type Add<GType> = ($b: I.Add<GType>) => void
        
        export type Push<GType> = ($b: I.Push<GType>) => void
    }
    
    export namespace I3 {
        
        export type Add<GType> = ($c: I2.Add<GType>) => void
        
        export type Push<GType> = ($c: I2.Push<GType>) => void
    }
    
    export namespace C {}
    
    export namespace C2 {}
    
    export namespace C3 {}
    
    export namespace F {
        
        export type BuildArray = <GType>($c: ($b: I.Push<GType>) => void) => T.Array<GType>
        
        export type BuildDictionary = <GType>($c: ($b: I.Add<GType>) => void) => T.Dictionary<GType>
        
        export type UnsafeBuildDictionary = <GType>($c: ($b: I.Add<GType>) => void) => T.Dictionary<GType>
    }
}