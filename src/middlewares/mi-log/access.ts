/*
 * @Author: HLGhpz
 * @Date: 2022-04-24 22:13:26
 * @LastEditors: HLGhpz
 * @LastEditTime: 2022-04-24 22:15:31
 * @Description:
 *
 * Copyright (c) 2022 by HLGhpz, All Rights Reserved.
 */

import { Json } from 'sequelize/types/utils'

function setAccess(ctx, message, commonInfo) {
  const { method, url, host, headers } = ctx.request
  const client = {
    method,
    url,
    host,
    message,
    referer: headers.referer,
    userAgent: headers['user-agent']
  }
  return JSON.stringify(Object.assign(client, commonInfo))
}

export { setAccess }
