import * as pt from 'pareto-core-types'

import { T   } from './types.generated'

import * as gcommon from "glo-pareto-common"

export type IAdd<GPType> = ($: T.KeyValuePair<GPType>, ) => void

export type IOnDuplicate<GPType> = ($: gcommon.T.String, ) => void

export type IPush<GPType> = ($: T.Type<GPType>, ) => void

export type FBuildArray = <GPType>($: gcommon.T.Null, $c: ($i: IPush<GPType>) => void,) => T.Array<GPType>

export type FBuildDictionary = <GPType>($: T.DictionaryBuildStrategy<GPType>, $c: ($i: IAdd<GPType>) => void, $i: IOnDuplicate<GPType>,) => T.Dictionary<GPType>

export type FUnsafeBuildDictionary = <GPType>($: gcommon.T.Null, $c: ($i: IAdd<GPType>) => void,) => T.Dictionary<GPType>