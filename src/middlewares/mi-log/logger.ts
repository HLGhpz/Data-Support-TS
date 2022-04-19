/*
 * @Author: HLGhpz
 * @Date: 2022-04-17 20:37:49
 * @LastEditors: HLGhpz
 * @LastEditTime: 2022-04-17 22:49:30
 * @Description:
 *
 * Copyright (c) 2022 by HLGhpz, All Rights Reserved.
 */
// const log4js = require('log4js');
// const access = require("./access.js");

import log4js from 'log4js'
import { access } from './access'

const methods = ['trace', 'debug', 'info', 'warn', 'error', 'fatal', 'mark']

const baseInfo = {
  appLogLevel: 'debug',
  dir: 'logs',
  env: 'dev',
  projectName: 'HLG DATA',
  serverIp: '0.0.0.0'
}

function setLogger(options) {
  const contextLogger = {}
  const appenders = {}

  // 继承自 baseInfo 默认参数
  const opts = Object.assign({}, baseInfo, options || {})
  // 需要的变量解构 方便使用
  const { env, appLogLevel, dir, serverIp, projectName } = opts
  const commonInfo = { projectName, serverIp }

  appenders.cheese = {
    type: 'dateFile',
    filename: `${dir}/task`,
    pattern: '-yyyy-MM-dd.log',
    alwaysIncludePattern: true
  }

  // if (env === "dev" || env === "local" || env === "development") {
  //   appenders.out = {
  //     type: "console"
  //   }
  // }
  let config = {
    appenders,
    categories: {
      default: {
        appenders: Object.keys(appenders),
        level: appLogLevel
      }
    }
  }

  const logger = log4js.getLogger('cheese')

  return async (ctx, next) => {
    const start = Date.now()

    log4js.configure(config)
    methods.forEach((method, i) => {
      contextLogger[method] = (message) => {
        logger[method](access(ctx, message, commonInfo))
      }
    })
    ctx.log = contextLogger

    await next()
    const responseTime = Date.now() - start
    logger.info(
      access(
        ctx,
        {
          responseTime: `响应时间为${responseTime / 1000}s`
        },
        commonInfo
      )
    )
  }
}

export {setLogger}
