/*
 * @Author: HLGhpz
 * @Date: 2022-04-17 20:37:49
 * @LastEditors: HLGhpz
 * @LastEditTime: 2022-04-24 22:51:23
 * @Description:
 *
 * Copyright (c) 2022 by HLGhpz, All Rights Reserved.
 */

import ip from 'ip'
import cors from 'koa2-cors'
import koaBody from 'koa-body'
import koaStatic from 'koa-static'
import path from 'path'

import { miSend } from './mi-send'
import { miLog } from './mi-log'

const __dirname = path.resolve()

function middleInit(app: any) {
  app.use(cors())
  app.use(miLog)
  app.use(koaStatic(path.join(__dirname, './public')))
  app.use(koaBody())
}

export { middleInit }
