'use client'

import { Fab, TextField } from "@mui/material";
import { useState, useCallback } from 'react';
import { useChat } from '../../hooks/useChat'
import styles from './ChatFooter.module.css'

const ChatFooter = () => {
  const [message, setMessage] = useState("");
  const { sendMessage } = useChat();

  const onSubmitHandler = useCallback(() => {
    if (message.trim().length < 1) return;
    sendMessage(message);
    setMessage("");
  }, [sendMessage, message]);

  return (
    <div className={styles.footer}>
      <div className={styles.messageInput}>
        <TextField
          id="outlined-basic-email"
          label="Message"
          fullWidth
          multiline
          variant="outlined"
          maxRows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyUp={(e) => {
            e.preventDefault();
            if (e.key === "Enter" && !e.shiftKey) {
              onSubmitHandler();
            }
          }}
        />
      </div>

      <div className={styles.sendButton}>
        <button onClick={onSubmitHandler} />
        {/* <Fab
          color="primary"
          aria-label="add"
          size="small"
          onClick={onSubmitHandler}
        >
          <SendIcon />
        </Fab> */}
      </div>
    </div>
  );
};

export default ChatFooter;