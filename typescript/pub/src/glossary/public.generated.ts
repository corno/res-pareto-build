import * as pt from 'pareto-core-types'

import { T } from './types.generated'

import * as g_common from "glo-pareto-common"

export namespace B {
    
    export type Add<GType> = ($: T.KeyValuePair<GType>, ) => void
    
    export type Push<GType> = ($: T.Type<GType>, ) => void
}

export namespace C {
    
    export type Add<GType> = ($b: B.Add<GType>) => void
    
    export type Push<GType> = ($b: B.Push<GType>) => void
}

export namespace F {
    
    export type BuildArray = <GType>($c: ($b: B.Push<GType>) => void) => T.Array<GType>
    
    export type BuildDictionary = <GType>($c: ($b: B.Add<GType>) => void) => T.Dictionary<GType>
    
    export type UnsafeBuildDictionary = <GType>($c: ($b: B.Add<GType>) => void) => T.Dictionary<GType>
}