/*
 * @Author: HLGhpz
 * @Date: 2022-04-17 20:37:49
 * @LastEditors: HLGhpz
 * @LastEditTime: 2022-04-18 16:22:42
 * @Description:
 *
 * Copyright (c) 2022 by HLGhpz, All Rights Reserved.
 */
// const ip = require('ip')

// const miSend = require('./mi-send')
// const miLog = require('./mi-log')

import ip from 'ip'
import { miSend } from './mi-send'
import { miLog } from './mi-log'
// const miHttpError = require('./mi-http-error')

export {miSend, miLog}


// module.exports = (app) => {
//   // app.use(miHttpError)
//   app.use(
//     miLog(app.env, {
//       env: app.env,
//       appLogLevel: 'debug',
//       dir: 'logs',
//       serverIp: ip.address()
//     })
//   )
//   app.use(miSend())
// }
