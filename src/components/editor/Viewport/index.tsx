import { useEditor } from '@craftjs/core'
import { Grid } from '@bolio-ui/core'
import cx from 'classnames'
import React, { useEffect } from 'react'

import { Header } from './Header'
import { Sidebar } from './Sidebar'
import { Toolbox } from './Toolbox'

import Navigation from 'src/components/Navigation'

export const Viewport: React.FC = ({ children }) => {
  const {
    enabled,
    connectors,
    actions: { setOptions }
  } = useEditor((state) => ({
    enabled: state.options.enabled
  }))

  useEffect(() => {
    if (!window) {
      return
    }

    window.requestAnimationFrame(() => {
      // Notify doc site
      window.parent.postMessage(
        {
          LANDING_PAGE_LOADED: true
        },
        '*'
      )

      setTimeout(() => {
        setOptions((options) => {
          options.enabled = true
        })
      }, 200)
    })
  }, [setOptions])

  return (
    <Grid>
      <Navigation />
      <div
        className={cx(['flex h-full overflow-hidden flex-row w-full fixed'])}
      >
        <Toolbox />
        <Grid className="page-container">
          <Header />
          <div
            className={cx([
              'craftjs-renderer flex-1 h-full w-full transition pb-8 overflow-auto',
              {
                'bg-renderer-gray': enabled
              }
            ])}
            ref={(ref) => connectors.select(connectors.hover(ref, null), null)}
          >
            <div className="relative flex-col flex items-center pt-8">
              {children}
            </div>
          </div>
        </Grid>
        <Sidebar />
      </div>
    </Grid>
  )
}
