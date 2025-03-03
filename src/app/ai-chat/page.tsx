'use client'

import React from 'react'
import { Container } from '@mui/material'
import Chatroom from '../components/Chatroom/page'
import NavBar from '../components/NavBar/page'

function AiChat() {
  return (
    <div className='chat-page'>
      <NavBar />
      <Container maxWidth='lg'>
        <Chatroom />
      </Container>
    </div>
  )
}

export default AiChat
