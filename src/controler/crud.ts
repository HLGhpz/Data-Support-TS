/*
 * @Author: HLGhpz
 * @Date: 2022-04-17 20:37:49
 * @LastEditors: HLGhpz
 * @LastEditTime: 2022-04-20 22:45:46
 * @Description:
 *
 * Copyright (c) 2022 by HLGhpz, All Rights Reserved.
 */
import { db } from '@/models/index'
import { Context } from 'koa'

const DBController = {
  createInfo: async (ctx: Context) => {
    try {
      await db.Info.sync({ alter: true })
      const info = await db.Info.create(ctx.request.body)
      ctx.body = info
    } catch (err) {
      ctx.body = err
    }
  },
  selectInfo: async (ctx: Context) => {
    try {
      await db.Info.sync({ alter: true })
      const info = await db.Info.findAll()
      ctx.body = info
    } catch (err) {
      ctx.body = `Error: ${err}`
    }
  },
  updateInfo: async (ctx: Context) => {
    try {
      await db.Info.sync({ alter: true })
      const info = await db.Info.update(ctx.request.body, {
        where: {
          id: ctx.request.body.id
        }
      })
      ctx.body = info
    } catch (err) {
      ctx.body = `Error: ${err}`
    }
  },
  deleteInfo: async (ctx: Context) => {
    try {
      await db.Info.sync({ alter: true })
      const info = await db.Info.destroy({
        where: {
          id: ctx.query.id
        }
      })
      ctx.body = info
    } catch (err) {
      ctx.body = `Error: ${err}`
    }
  }
}

export { DBController }
