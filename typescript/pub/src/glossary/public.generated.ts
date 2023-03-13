import * as pt from 'pareto-core-types'

import { T } from './types.generated'

import * as g_common from "glo-pareto-common"

export namespace B {
    
    export type Add<GType> = ($: T.KeyValuePair<GType>, ) => void
    
    export type OnDuplicate<GType> = ($: g_common.T.String, ) => void
    
    export type Push<GType> = ($: T.Type<GType>, ) => void
}

export namespace F {
    
    export type BuildArray = <GType>($: g_common.T.Null, $c: ($b: B.Push<GType>) => void,) => T.Array<GType>
    
    export type BuildDictionary = <GType>($: T.DictionaryBuildStrategy<GType>, $c: ($b: B.Add<GType>) => void,) => T.Dictionary<GType>
    
    export type OnDuplicate = <GType>($: g_common.T.Null, $c: ($b: B.OnDuplicate<GType>) => void,) => void
    
    export type UnsafeBuildDictionary = <GType>($: g_common.T.Null, $c: ($b: B.Add<GType>) => void,) => T.Dictionary<GType>
}