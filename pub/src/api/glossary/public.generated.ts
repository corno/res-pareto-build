import * as pt from 'pareto-core-types'

import { T   } from './types.generated'

import * as mcommon from "glo-pareto-common"

export type IAdd<GPType> = ($: T.KeyValuePair<GPType>, ) => void

export type IPush<GPType> = ($: T.Type<GPType>, ) => void

export type FBuildArray = <GPType>($: mcommon.T.Null, $c: ($i: IPush<GPType>) => void,) => T.Array<GPType>

export type FUnsafeBuildDictionary = <GPType>($: mcommon.T.Null, $c: ($i: IAdd<GPType>) => void,) => T.Dictionary<GPType>