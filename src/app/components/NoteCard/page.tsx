// NoteCard.tsx
import React from 'react'
import { Typography, Card, CardHeader, IconButton, Avatar, CardContent } from '@mui/material'
import { pink, blue, green, yellow } from '@mui/material/colors'
import { DeleteOutlineOutlined } from '@mui/icons-material'
import { Note } from '../../types'  // Importe o tipo Note corretamente

// Função que retorna a cor do avatar de acordo com a categoria
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

// Defina as propriedades do componente NoteCard
interface NoteCardProps {
  n: Note  // Aqui o tipo da propriedade n é o tipo Note
}

// O componente NoteCard que recebe o tipo de nota como propriedade
const NoteCard: React.FC<NoteCardProps> = ({ n }) => {
  return (
    <Card elevation={1} sx={{ marginBottom: 2 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ backgroundColor: getAvatarColor(n.category) }}>
            {n.category[0].toUpperCase()}
          </Avatar>
        }
        action={
          <IconButton onClick={() => console.log('teste click')}>
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
