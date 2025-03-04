'use client'

import * as React from 'react'
import {
  Typography,
  Button,
  FormControl,
  TextField,
  InputLabel,
  Select,
  Container,
  MenuItem,
} from '@mui/material'
import NavBar from '../components/NavBar/page'
import type { Note } from '../types'
import NoteCard from '../components/NoteCard/page'
import axios from 'axios'
import NotesCounter from '../components/NotesCounter/page'

function NotesPage() {
  const [notes, setNotes] = React.useState<Note[]>([])
  const [title, setTitle] = React.useState('')
  const [details, setDetails] = React.useState('')
  const [category, setCategory] = React.useState('todos')
  const [titleError, setTitleError] = React.useState(false)
  const [detailsError, setDetailsError] = React.useState(false)

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setTitleError(false)
    setDetailsError(false)

    if (title === '') {
      setTitleError(true)
    }

    if (details === '') {
      setDetailsError(true)
    }

    if (title && details) {
      const newNote: Note = {
        id: Date.now(),
        title,
        details,
        category,
      }
      setNotes((prevNotes) => [...prevNotes, newNote])
      setTitle('')
      setDetails('')
      setCategory('todos')

      try {
        const response = await axios.post('http://localhost:8080/notes', newNote)
        fetchNotes()
        setNotes((prevNotes) => [...prevNotes, response.data])
        setTitle('')
        setDetails('')
        setCategory('todos')
      } catch (error) {
        console.error('Erro ao adicionar a nota', error)
      }
    }
  }

  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`http://localhost:8080/notes/${id}`)
      setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id))
    } catch (error) {
      console.error('Erro ao remover a nota ', error)
    }
  }

  return (
    <div>
      <NavBar />
      <Container
        maxWidth='xl'
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 2,
          p: 6,
        }}
      >
        <Typography variant='h4'>Stop and take some notes 😉</Typography>
        <form onSubmit={handleSubmit} style={{ gridColumn: 'span 2'}}>
        <TextField
            label="Note Title"
            variant="outlined"
            color="secondary"
            fullWidth
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            error={titleError}
            sx={{ marginBottom: '16px' }}
          />
          <TextField
            label="Details"
            variant="outlined"
            color="secondary"
            fullWidth
            required
            multiline
            rows={4}
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            error={detailsError}
            sx={{ marginBottom: '16px' }}
          />
          <FormControl fullWidth sx={{ marginBottom: '16px' }}>
            <InputLabel>Category</InputLabel>
            <Select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              label="Category"
            >
              <MenuItem value="todos">Todos</MenuItem>
              <MenuItem value="work">Work</MenuItem>
              <MenuItem value="money">Money</MenuItem>
              <MenuItem value="reminders">Reminders</MenuItem>
            </Select>
          </FormControl>
          <Button
            type="submit"
            color="secondary"
            variant="contained"
            fullWidth
            sx={{ marginBottom: '16px' }}
          >
            Add Note
          </Button>
        </form>
      </Container>
      <NotesList notes={notes} onDelete={handleDelete}/>
    </div>
  )
}

function NotesList({ notes, onDelete }: { notes: Note[]; onDelete: (id: number) => void }) {
  return (
    <Container sx={{ p: 6}}>
      {notes.map((note) => (
        <NoteCard key={note.id} n={note} onDelete={onDelete}/>
      ))}
    </Container>
  )
}

export default NotesPage
