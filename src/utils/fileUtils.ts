/*
 * @Author: HLGhpz
 * @Date: 2022-04-17 20:37:49
 * @LastEditors: HLGhpz
 * @LastEditTime: 2022-04-17 21:14:42
 * @Description:
 *
 * Copyright (c) 2022 by HLGhpz, All Rights Reserved.
 */
// const fs = require('fs')
// const path = require('path')

import * as fs from 'fs'
import path from 'path'

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

function getFilePath(url: string) {
  return path.join(__dirname, '../api', url + '.json')
}

export { getFileJsonData, getFilePath }
