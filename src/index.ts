/*
 * @Author: HLGhpz
 * @Date: 2022-04-17 14:50:55
 * @LastEditors: HLGhpz
 * @LastEditTime: 2022-04-24 22:49:32
 * @Description:
 *
 * Copyright (c) 2022 by HLGhpz, All Rights Reserved.
 */

import koa from 'koa'

import { router } from './routes'
import { middleInit } from './middlewares'

const app = new koa()

middleInit(app)
app.use(router.routes())
app.use(router.allowedMethods())
app.listen(3030)
