import React from 'react'
import { Element, useEditor } from '@craftjs/core'
import { useTheme, Tooltip, Grid, Button as ButtonTheme } from '@bolio-ui/core'
import {
  Square as SquareIcon,
  Type as TypeIcon,
  Codepen as CodepenIcon
} from '@bolio-ui/icons'
import { Button } from '../../selectors/Button'
import { Container } from '../../selectors/Container'
import { Text } from '../../selectors/Text'

export const Toolbox = () => {
  const theme = useTheme()

  const {
    enabled,
    connectors: { create }
  } = useEditor((state) => ({
    enabled: state.options.enabled
  }))

  return (
    <Grid.Container
      gap={1}
      style={{
        borderRight: '1px solid',
        borderColor: theme.palette.accents_2
      }}
    >
      <Grid>
        <div
          ref={(ref) =>
            create(
              ref,
              <Element
                canvas
                is={Container}
                background={{ r: 78, g: 78, b: 78, a: 1 }}
                color={{ r: 0, g: 0, b: 0, a: 1 }}
                height="300px"
                width="300px"
              ></Element>
            )
          }
        >
          <Tooltip text="Container" placement="right" scale={1 / 2}>
            <ButtonTheme icon={<SquareIcon />} auto mb={1} />
          </Tooltip>
        </div>
        <div
          ref={(ref) =>
            create(ref, <Text fontSize="12" textAlign="left" text="Hi there" />)
          }
        >
          <Tooltip text="Text" placement="right" scale={1 / 2}>
            <ButtonTheme icon={<TypeIcon />} auto mb={1} />
          </Tooltip>
        </div>
        <div ref={(ref) => create(ref, <Button />)}>
          <Tooltip text="Button" placement="right">
            <ButtonTheme icon={<CodepenIcon />} auto mb={1} />
          </Tooltip>
        </div>
      </Grid>
    </Grid.Container>
  )
}
