/*
 * @Author: HLGhpz
 * @Date: 2022-04-29 13:52:51
 * @LastEditors: HLGhpz
 * @LastEditTime: 2022-04-29 13:54:59
 * @Description:
 *
 * Copyright (c) 2022 by HLGhpz, All Rights Reserved.
 */

import { Sequelize } from 'sequelize/types'

function finishModel(sequelize: any, DataTypes: any) {
  const Finish = sequelize.define('Finish', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    abstract: {
      type: DataTypes.STRING
    },
    dataLink: {
      type: DataTypes.STRING
    },
    dataType: {
      type: DataTypes.STRING
    },
    chartLink: {
      type: DataTypes.STRING
    },
    chartType: {
      type: DataTypes.STRING
    },
    tag: {
      type: DataTypes.ENUM,
      values: ['Project', 'Collect', 'Make', 'Achieve', 'Pause', 'Abolish'],
      defaultValue: 'Project'
    },
    createDays: {
      type: DataTypes.INTEGER
    },
    note: {
      type: DataTypes.STRING
    },
    like: {
      type: DataTypes.INTEGER
    },
    coin: {
      type: DataTypes.INTEGER
    },
    star: {
      type: DataTypes.INTEGER
    }
  })
  return Finish
}

export { finishModel }
