/*
 * @Author: HLGhpz
 * @Date: 2022-04-17 20:37:49
 * @LastEditors: HLGhpz
 * @LastEditTime: 2022-04-19 19:18:55
 * @Description:
 *
 * Copyright (c) 2022 by HLGhpz, All Rights Reserved.
 */
// const fs = require('fs')
// const path = require('path')

import * as fs from 'fs'
import path from 'path'

const __dirname = path.resolve()

function getFileJsonData(filePath: string) {
  return new Promise((resolve, rejects) => {
    fs.readFile(filePath, 'utf-8', (error, data) => {
      if (error) {
        rejects(error)
      } else {
        resolve(data)
      }
    })
  })
}

function getFilePath(fileName: string | string[] | undefined) {
  return path.join(__dirname, './static', fileName + '.json')
}

export { getFileJsonData, getFilePath }
