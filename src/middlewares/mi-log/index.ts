/*
 * @Author: HLGhpz
 * @Date: 2022-04-17 20:37:49
 * @LastEditors: HLGhpz
 * @LastEditTime: 2022-04-17 22:51:07
 * @Description:
 *
 * Copyright (c) 2022 by HLGhpz, All Rights Reserved.
 */
import { setLogger } from './logger'

function miLog(options) {
  const loggerMiddleware = setLogger(options)

  return (ctx, next) => {
    return loggerMiddleware(ctx, next).catch((e) => {
      if (ctx.status < 500) {
        ctx.status = 500
      }
      ctx.log.error(e.stack)
      ctx.state.logged = true
      ctx.throw(e)
    })
  }
}

export { miLog }
