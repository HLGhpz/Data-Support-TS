/*
 * @Author: HLGhpz
 * @Date: 2022-04-17 20:37:49
 * @LastEditors: HLGhpz
 * @LastEditTime: 2022-04-19 19:17:17
 * @Description:
 *
 * Copyright (c) 2022 by HLGhpz, All Rights Reserved.
 */

import Router from 'koa-router'

import { DataController } from '@/controler/data'
import { DBController } from '@/controler/crud'

const router = new Router()
router
  .get('/api/data', DataController.getData)
  .get('/api/todo', DBController.selectInfo)
  .put('/api/todo', DBController.updateInfo)
  .post('/api/todo', DBController.createInfo)
  .del('/api/todo', DBController.deleteInfo)
  // .all('/api/todo', DBController.deleteInfo)

export { router }
