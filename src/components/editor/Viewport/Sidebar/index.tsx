import React, { useState } from 'react'
import { useEditor } from '@craftjs/core'
import { useTheme, Tooltip, Grid, Button as ButtonTheme } from '@bolio-ui/core'
import { Toolbar } from '../../Toolbar'
import { SidebarItem } from './SidebarItem'
import styled from 'styled-components'

import CustomizeIcon from '../../../../../public/icons/customize.svg'

export const Sidebar = () => {
  const theme = useTheme()

  const { enabled } = useEditor((state) => ({
    enabled: state.options.enabled
  }))

  return (
    <Grid.Container
      gap={1}
      style={{
        borderLeft: '1px solid',
        borderColor: theme.palette.accents_2
      }}
    >
      <Grid style={{ width: 280 }}>
        <SidebarItem icon={CustomizeIcon} title="Customize" visible>
          <Toolbar />
        </SidebarItem>
      </Grid>
    </Grid.Container>
  )
}
