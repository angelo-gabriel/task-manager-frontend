import React from 'react'
import { Typography, Card, CardHeader, IconButton, Avatar, CardContent } from '@mui/material'
import { pink, blue, green, yellow } from '@mui/material/colors'
import { DeleteOutlineOutlined } from '@mui/icons-material'
import { Note } from '../../types'

// Função que retorna a cor da nota de acordo com a categoria
const getAvatarColor = (category: string) => {
  switch (category) {
    case 'work':
      return yellow[700]
    case 'money':
      return green[500]
    case 'todos':
      return pink[500]
    default:
      return blue[500]
  }
}

interface NoteCardProps {
  n: Note
  onDelete: (id: number) => void
}

const NoteCard: React.FC<NoteCardProps> = ({ n, onDelete }) => {
  return (
    <Card elevation={1} sx={{ marginBottom: 2 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ backgroundColor: getAvatarColor(n.category) }}>
            {n.category[0].toUpperCase()}
          </Avatar>
        }
        action={
          <IconButton onClick={() => onDelete(n.id)}>
            <DeleteOutlineOutlined />
          </IconButton>
        }
        title={n.title}
        subheader={n.category}
      />
      <CardContent>
        <Typography variant='body2' color='textSecondary'>
          {n.details}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default NoteCard
