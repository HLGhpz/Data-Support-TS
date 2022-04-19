/*
 * @Author: HLGhpz
 * @Date: 2022-04-17 20:37:49
 * @LastEditors: HLGhpz
 * @LastEditTime: 2022-04-18 16:20:00
 * @Description:
 *
 * Copyright (c) 2022 by HLGhpz, All Rights Reserved.
 */
import { Sequelize, DataTypes } from 'sequelize'
import { config } from '@/config/config'
import { infoModel } from '@/models/info'

const sequelize = new Sequelize('', '', '', config.hlg)

const Info = infoModel(sequelize, DataTypes)

const db = {
  Info: infoModel(sequelize, DataTypes),
  sequelize,
  Sequelize
}

export {db}
