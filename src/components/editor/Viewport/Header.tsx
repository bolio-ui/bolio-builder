import React from 'react'
import { useEditor } from '@craftjs/core'
import { useTheme, Tooltip, Button, Grid } from '@bolio-ui/core'
import {
  Check as CheckIcon,
  Edit2 as Edit2Icon,
  CornerUpLeft as CornerUpLeftIcon,
  CornerUpRight as CornerUpRightIcon
} from '@bolio-ui/icons'

export const Header = () => {
  const theme = useTheme()

  const { enabled, canUndo, canRedo, actions } = useEditor((state, query) => ({
    enabled: state.options.enabled,
    canUndo: query.history.canUndo(),
    canRedo: query.history.canRedo()
  }))

  return (
    <Grid.Container
      gap={2}
      style={{
        borderBottom: '1px solid',
        borderColor: theme.palette.accents_2
      }}
    >
      {enabled && (
        <Grid xs justify="flex-start">
          <Tooltip text="Undo" placement="bottom" scale={1 / 2}>
            <Button
              icon={<CornerUpLeftIcon />}
              w="28px"
              h="28px"
              py={0}
              px={0}
              disabled={!canUndo}
              onClick={() => actions.history.undo()}
            />
          </Tooltip>
          <Tooltip text="Redo" placement="bottom" scale={1 / 2}>
            <Button
              icon={<CornerUpRightIcon />}
              w="28px"
              h="28px"
              py={0}
              px={0}
              disabled={!canRedo}
              onClick={() => actions.history.redo()}
            />
          </Tooltip>
        </Grid>
      )}
      <Grid xs justify="flex-end">
        <Button
          h="28px"
          rounded
          icon={
            enabled ? (
              <CheckIcon stroke={theme.palette.background} />
            ) : (
              <Edit2Icon stroke={theme.palette.background} />
            )
          }
          type={enabled ? 'secondary-light' : 'primary-light'}
          onClick={() => {
            actions.setOptions((options) => (options.enabled = !enabled))
          }}
        >
          {enabled ? 'Visualize' : 'Edit'}
        </Button>
      </Grid>
    </Grid.Container>
  )
}
