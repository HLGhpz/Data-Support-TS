/*
 * @Author: HLGhpz
 * @Date: 2022-04-24 21:52:04
 * @LastEditors: HLGhpz
 * @LastEditTime: 2022-04-24 22:55:16
 * @Description:
 *
 * Copyright (c) 2022 by HLGhpz, All Rights Reserved.
 */

import log4js from 'log4js'
import ip from 'ip'

import { setAccess } from './access'
const methods = ['trace', 'debug', 'info', 'warn', 'error', 'fatal', 'mark']

const baseInfo = {
  appLogLevel: 'debug',
  dir: 'logs',
  env: 'dev',
  projectName: 'Data-Support-TS',
  serverIp: ip.address()
}

const { env, appLogLevel, dir, projectName, serverIp } = baseInfo
const commonInfo = { projectName, serverIp }

const contextLogger = {} as any
const appenders = {} as any

appenders.cheese = {
  type: 'dateFile',
  filename: `${dir}/task`,
  pattern: '-yyyy-MM-dd.log',
  alwaysIncludePattern: true
}

let config = {
  appenders,
  categories: {
    default: {
      appenders: Object.keys(appenders),
      level: appLogLevel
    }
  }
}

const logger: any = log4js.getLogger('cheese')

async function setLogger(ctx, next) {
  const start = Date.now()

  log4js.configure(config)
  methods.forEach((method, index) => {
    contextLogger[method] = (message) => {
      logger[method](setAccess(ctx, message, commonInfo))
    }
  })
  ctx.log = contextLogger

  await next()
  const responseTime = Date.now() - start
  logger.info(setAccess(ctx, `${responseTime}ms`, commonInfo))
}

export { setLogger }
