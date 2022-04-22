/*
 * @Author: HLGhpz
 * @Date: 2022-04-17 20:37:49
 * @LastEditors: HLGhpz
 * @LastEditTime: 2022-04-19 19:36:05
 * @Description:
 *
 * Copyright (c) 2022 by HLGhpz, All Rights Reserved.
 */

import { getFileJsonData, getFilePath } from '@/utils/fileUtils'
import { Context } from 'koa'

const DataController = {
  getData: async (ctx: Context) => {
    const filePath = getFilePath(ctx.query.fileName)
    console.log(filePath)
    try {
      const ret = await getFileJsonData(filePath)
      ctx.response.body = ret
    } catch (error) {
      ctx.response.body = error
    }
  }
}

export { DataController }
