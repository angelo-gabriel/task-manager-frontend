'use client'

import Navbar from '../components/NavBar/page'
import { Container, Typography, Button, Paper } from '@mui/material'
import Image from 'next/image'
import NotesCounter from '../components/NotesCounter/page'
import type { Note } from '../types'
import React from 'react'
import axios from 'axios'

function SettingsPage() {
  const [notes, setNotes] = React.useState<Note[]>([])

  const fetchNotes = async () => {
    try {
      const response = await axios.get('http://localhost:8080/notes')
      setNotes(response.data.notes)
    } catch (error) {
      console.error('Erro ao carregar as notas', error)
    }
  }

  React.useEffect(() => {
    fetchNotes()
  }, [])

  return (
    <div>
      <Navbar />
      <Container
        maxWidth='xl'
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 1,
          p: 8,
        }}
      >
        <Image
          src='/globe.svg'
          width={400}
          height={400}
          alt='your profile picture'
        />
        <Paper elevation={1} sx={{ ':hover': {
          boxShadow: 6 
        }, p: 6}}>
          <Typography variant='h4' sx={{ p: 4 }}>
            Ângelo Gabriel
          </Typography>
          <Typography variant='body1'>
            Website created by me, all rights reserved. Lorem ipsum dolor sit,
            amet consectetur adipisicing elit. Amet temporibus eveniet, quaerat
            sequi officia voluptas, quas dolores fugiat recusandae adipisci
            fugit commodi. Nemo odio libero rem voluptate commodi animi minus?
          </Typography>
          <NotesCounter count={notes.length} />
          <Button variant='outlined' href='/notetaking' sx={{ mt: 4 }}>
            Create notes
          </Button>
          <Button variant='contained' href='/' sx={{ ml: 6, mt: 4 }}>
            Dashboard
          </Button>
        </Paper>
      </Container>
    </div>
  )
}

export default SettingsPage
