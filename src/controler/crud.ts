/*
 * @Author: HLGhpz
 * @Date: 2022-04-17 20:37:49
 * @LastEditors: HLGhpz
 * @LastEditTime: 2022-05-26 22:37:44
 * @Description:
 *
 * Copyright (c) 2022 by HLGhpz, All Rights Reserved.
 */
import { db } from '@/models/index'
import { Context } from 'koa'
import _ from 'lodash'

const DBController = {
  createInfo: async (ctx: Context) => {
    try {
      await db.Todo.sync({ alter: true })
      const info = await db.Todo.create(ctx.request.body)
      ctx.body = info
    } catch (err) {
      ctx.body = err
    }
  },
  selectInfo: async (ctx: Context) => {
    try {
      await db.Todo.sync({ alter: true })
      const info = await db.Todo.findAll()
      ctx.body = info
    } catch (err) {
      ctx.body = `Error: ${err}`
    }
  },
  updateInfo: async (ctx: Context) => {
    try {
      await db.Todo.sync({ alter: true })
      const info = await db.Todo.update(ctx.request.body, {
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
      await db.Todo.sync({ alter: true })
      const info = await db.Todo.destroy({
        where: {
          id: ctx.query.id
        }
      })
      ctx.body = info
    } catch (err) {
      ctx.body = `Error: ${err}`
    }
  },
  selectFinish: async (ctx: Context) => {
    try {
      await db.Finish.sync({ alter: true })
      const finish = await db.Finish.findAll()
      ctx.body = finish
    } catch (err) {
      ctx.body = `Error: ${err}`
    }
  },
  createFinish: async (ctx: Context) => {
    try {
      await db.Finish.sync({ alter: true })
      await db.Todo.destroy({
        where: {
          id: ctx.request.body.id
        }
      })
      const finish = await db.Finish.create(ctx.request.body)
      ctx.body = finish
    } catch (err) {
      const finish = await db.Finish.create(_.omit(ctx.request.body, 'id'))
      ctx.body = finish
    }
  },
  updateFinish: async (ctx: Context) => {
    try {
      await db.Finish.sync({ alter: true })
      const finish = await db.Finish.update(ctx.request.body, {
        where: {
          id: ctx.request.body.id
        }
      })
      ctx.body = finish
    } catch (err) {
      ctx.body = `Error: ${err}`
    }
  }
}

export { DBController }
