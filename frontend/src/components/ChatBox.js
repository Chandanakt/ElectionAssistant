import { useState } from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';

function ChatBox() {

  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {

    if (!message) return;

    setLoading(true);

    try {

      const res = await axios.post(
        'http://localhost:8000/chat',
        {
          message: message
        }
      );

      setResponse(res.data.response);

    } catch (error) {
      console.log(error);
      setResponse('Error connecting to backend');
    }

    setLoading(false);
  };

  return (
    <div className="card">

      <h2>💬 Ask Questions</h2>

      <input
        type="text"
        placeholder="Ask about elections..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <button onClick={sendMessage}>
        Ask Assistant
      </button>

      {
        loading && <p>Loading...</p>
      }

      {
        response && (
          <div>
            <h3>Assistant Response:</h3>
            <ReactMarkdown>{response}</ReactMarkdown>
          </div>
        )
      }

    </div>
  );
}

export default ChatBox;
