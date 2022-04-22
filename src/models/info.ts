/*
 * @Author: HLGhpz
 * @Date: 2022-04-17 20:37:49
 * @LastEditors: HLGhpz
 * @LastEditTime: 2022-04-21 17:40:59
 * @Description:
 *
 * Copyright (c) 2022 by HLGhpz, All Rights Reserved.
 */

import { Sequelize } from 'sequelize/types'

function infoModel(sequelize: any, DataTypes: any) {
  const Info = sequelize.define('Info', {
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
    }
  })
  return Info
}

export { infoModel }
