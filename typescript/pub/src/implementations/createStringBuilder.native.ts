import { A } from "../api.generated"

export const $$: A.createStringBuilder = ($c) => {
    return {
        'construct': ($is) => {
            let temp = $c
            return {
                'data': ($) => {
                    temp += $
                },
                'end': ($) => {
                    $is.handler({
                        'string': temp,
                        'end': $,
                    })
                }
            }
        }
    }
}