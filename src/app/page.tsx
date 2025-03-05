'use client'

import { Container, Paper, Typography } from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar'
import NavBar from './components/NavBar/page'
import Todo from './components/Todo/page'
import React from 'react'
import Footer from './components/Footer/page'

export default function Home() {
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
        <Todo />
        <Paper
          elevation={1}
          sx={{
            ':hover': {
              boxShadow: 6,
            },
            p: 4,
          }}
        >
          <Typography variant='h5' sx={{ mt: 2, textAlign: 'center' }}>
            Calendar
          </Typography>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar />
          </LocalizationProvider>
        </Paper>
      </Container>
      <Footer />
    </div>
  )
}
