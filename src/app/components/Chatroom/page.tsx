import ChatBody from '../ChatBody/page'
import ChatHeader from '../ChatHeader/page'
import Conversation from '../Conversation/page'
import ChatFooter from '../ChatFooter/page'
import styles from './Chatroom.module.css'

const Chatroom = () => {
  return (
    <div className={styles.chatroom}>
      <ChatHeader
        avatar={{
          alt: 'Ollama avatar',
          src: 'ollama.png',
        }}
        title='Llama 3'
      />
      <ChatBody>
        <Conversation />
        <ChatFooter />
      </ChatBody>
    </div>
  )
}

export default Chatroom
