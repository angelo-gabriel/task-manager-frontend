'use client'

import { Container } from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar'
import NavBar from './components/NavBar/page'
import Todo from './components/Todo/page'
import React from 'react'

export default function Home() {
  return (
    <div>
      <NavBar />
      <Container maxWidth='xl' sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: 2,
        p: 6
      }}>
        <Todo />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar />
        </LocalizationProvider>
      </Container>
    </div>
  )
}
