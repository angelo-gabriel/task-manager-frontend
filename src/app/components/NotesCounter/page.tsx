'use client'

import { Typography } from "@mui/material"

function NotesCounter({count}: {count: number}) {
  return (
    <Typography variant='h6' sx={{ mt: 6 }}>
      Total notes created: {count}
    </Typography>
  )
}

export default NotesCounter