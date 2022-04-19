/*
 * @Author: HLGhpz
 * @Date: 2022-04-17 20:37:49
 * @LastEditors: HLGhpz
 * @LastEditTime: 2022-04-18 13:31:19
 * @Description:
 *
 * Copyright (c) 2022 by HLGhpz, All Rights Reserved.
 */

import { getFileJsonData, getFilePath } from "@/utils/fileUtils"

const DataController = {
  showData: async (ctx, next) => {
    let filePath = getFilePath(ctx.url)
    try {
      const ret = getFileJsonData(filePath)
      ctx.response.body = ret
    } catch (error) {
      ctx.response.body = error
    }
  }
}

export { DataController }
