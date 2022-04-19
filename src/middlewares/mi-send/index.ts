/*
 * @Author: HLGhpz
 * @Date: 2022-04-17 20:37:49
 * @LastEditors: HLGhpz
 * @LastEditTime: 2022-04-17 22:40:41
 * @Description:
 *
 * Copyright (c) 2022 by HLGhpz, All Rights Reserved.
 */
function render(json) {
  this.set('Content-Type', 'application/json')
  this.body = json
}

async function miSend(ctx, next) {
  ctx.send = render.bind(ctx)
  ctx.log.error('ikcamp')
  await next()
}

export { miSend }
