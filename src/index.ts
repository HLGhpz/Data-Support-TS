/*
 * @Author: HLGhpz
 * @Date: 2022-04-17 14:50:55
 * @LastEditors: HLGhpz
 * @LastEditTime: 2022-04-18 20:58:36
 * @Description:
 *
 * Copyright (c) 2022 by HLGhpz, All Rights Reserved.
 */

import koa from 'koa';
import cors from 'koa2-cors';
import koaBody from 'koa-body';

import { router } from './routes'

const app = new koa();
app.use(cors())
app.use(koaBody())
app.use(router.routes())
app.use(router.allowedMethods())
app.listen(3030)

