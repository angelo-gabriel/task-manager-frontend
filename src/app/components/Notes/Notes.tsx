import React, { useState, useEffect } from 'react'
import { Container } from '@mui/material'
import NoteCard from '../NoteCard/page'
import Masonry from '@mui/lab/Masonry'
import type { Note } from '../../types'

interface NotesProps {
  notes: Note[]
}

export default function Note({ notes }: NotesProps) {
  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1,
  }

  return (
    <Container>
      <Masonry
        columns={breakpoints.default}
        className='my-masonry-grid'
        spacing={2}
        component='div'
      >
        {notes.map((n) => {
          return (
            <div key={n.id}>
              <NoteCard n={n} />
            </div>
          )
        })}
      </Masonry>
    </Container>
  )
}
