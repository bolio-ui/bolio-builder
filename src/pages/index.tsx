import React from 'react'
import { Editor, Frame, Element } from '@craftjs/core'

import { Viewport, RenderNode } from '../components/editor'
import { Container, Text } from '../components/selectors'
import { Button } from '../components/selectors/Button'
import { Custom1, OnlyButtons } from '../components/selectors/Custom1'
import { Custom2, Custom2VideoDrop } from '../components/selectors/Custom2'
import { Custom3, Custom3BtnDrop } from '../components/selectors/Custom3'
import { Video } from '../components/selectors/Video'

function App() {
  return (
    <Editor
      resolver={{
        Container,
        Text,
        Custom1,
        Custom2,
        Custom2VideoDrop,
        Custom3,
        Custom3BtnDrop,
        OnlyButtons,
        Button,
        Video
      }}
      enabled={false}
      onRender={RenderNode}
    >
      <Viewport></Viewport>
    </Editor>
  )
}

export default App
