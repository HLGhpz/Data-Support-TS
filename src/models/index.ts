/*
 * @Author: HLGhpz
 * @Date: 2022-04-17 20:37:49
 * @LastEditors: HLGhpz
 * @LastEditTime: 2022-04-29 15:37:49
 * @Description:
 *
 * Copyright (c) 2022 by HLGhpz, All Rights Reserved.
 */
import { Sequelize, DataTypes } from 'sequelize'
import { config } from '@/config/config'
import { todoModel } from '@/models/todo'
import { finishModel } from '@/models/finish'

const sequelize = new Sequelize('', '', '', config.hlg)

const Todo = todoModel(sequelize, DataTypes)
const Finish = finishModel(sequelize, DataTypes)

const db = {
  Todo,
  Finish,
  sequelize,
  Sequelize
}

export { db }
