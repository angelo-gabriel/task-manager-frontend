'use client'

import {
  TextField,
  Button,
  Typography,
  Checkbox,
  List,
  ListItem,
  Container,
} from '@mui/material'
import { styled } from '@mui/system'
import { SetStateAction, useState } from 'react'
import styles from './Todo.module.css'

interface Todo {
  val: string
  isDone: boolean
  id: number
}

const Input = styled(TextField)({
  width: '70%',
  marginBottom: 30,
})

const AddButton = styled(Button)({
  height: 55,
  marginBottom: 30,
})

const StyledContainer = styled(Container)({
  textAlign: 'center',
  marginTop: 100,
})

const StyledList = styled(ListItem)({
  width: '80%',
  margin: 'auto',
  display: 'flex',
  justifyContent: 'space-around',
  border: '1px solid light-gray',
})

const Text = styled(Typography)({
  width: '70%',
})

const ListButtons = styled(Button)({
  marginLeft: 10,
})

function Todo() {
  const [inputVal, setInputVal] = useState('')
  const [todos, setTodos] = useState<Todo[]>([])
  const [isEdited, setIsEdited] = useState(false)
  const [editedId, setEditedId] = useState<number | null>(null)
  const classes = styles

  const onChange = (e: { target: { value: SetStateAction<string> } }) => {
    setInputVal(e.target.value)
  }

  const handleClick = () => {
    if (!isEdited) {
      setTodos([
        ...todos,
        { val: inputVal, isDone: false, id: new Date().getTime() },
      ])
    } else {
      setTodos([...todos, { val: inputVal, isDone: false, id: editedId! }])
    }
    setInputVal('')
    setIsEdited(false)
  }

  const onDelete = (id: number) => {
    const newTodos = todos.filter((todo) => todo.id !== id)
    setTodos(newTodos)
  }

  const handleDone = (id: number) => {
    const updated = todos.map((todo) => {
      if (todo.id === id) {
        todo.isDone = !todo.isDone
      }
      return todo
    })
    setTodos(updated)
  }

  const handleEdit = (id: number) => {
    const newTodos = todos.filter((todo) => todo.id !== id)
    const editVal = todos.find((todo) => todo.id === id)
    if (editVal) {
      setEditedId(editVal.id)
      setInputVal(editVal.val)
    }
    setTodos(newTodos)
    setIsEdited(true)
  }

  return (
    <Container component='main' className={classes.container}>
      <Typography
        variant='h4'
        sx={{
          my: 2,
          py: 1,
        }}
      >
        Enter your tasks
      </Typography>
      <TextField
        variant='outlined'
        onChange={onChange}
        label='type your task'
        value={inputVal}
        className={classes.input}
      />
      <Button
        size='large'
        variant={isEdited ? 'outlined' : 'contained'}
        color='primary'
        onClick={handleClick}
        className={classes.addButton}
        disabled={inputVal ? false : true}
      >
        {isEdited ? 'Edit Task' : 'Add Task'}
      </Button>
      <List sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {todos.map((todo) => {
          return (
            <ListItem
              key={todo.id}
              divider={true}
              className={classes.list}
              sx={{ mb: 2 }}
            >
              <Checkbox
                onClick={() => handleDone(todo.id)}
                checked={todo.isDone}
              />
              <Typography
                className={classes.text}
                style={{ color: todo.isDone ? 'green' : '' }}
                key={todo.id}
              >
                {todo.val}
              </Typography>
              <Button
                onClick={() => handleEdit(todo.id)}
                variant='contained'
                className={classes.listButtons}
              >
                Edit
              </Button>
              <Button
                onClick={() => onDelete(todo.id)}
                color='secondary'
                variant='contained'
                className={classes.listButtons}
              >
                delete
              </Button>
            </ListItem>
          )
        })}
      </List>
    </Container>
  )
}

export default Todo
