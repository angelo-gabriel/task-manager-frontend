'use client'

import ChatMessage from '../../components/ChatMessage/page'
import { useChat } from '../../hooks/useChat'
import styles from './Conversation.module.css'

const Conversation = () => {
  const { messages } = useChat()

  return (
    <div className={styles.conversation}>
      <div>
        {messages.map((message) => {
          if (message.from == 'user') {
            return <ChatMessage side={'user'} message={message.text} />
          }
          return (
            <ChatMessage
              side={'ai'}
              avatar={'ollama.png'}
              message={message.text}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Conversation