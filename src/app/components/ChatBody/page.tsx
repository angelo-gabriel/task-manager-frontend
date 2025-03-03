import { ChatContextProvider } from '../../context/chat';
import { useChat } from '../../hooks/useChat'

type Props = {
  children: React.ReactNode
}

const ChatBody = ({children}: Props) => {
  return <ChatContextProvider>{children}</ChatContextProvider>
}

export default ChatBody