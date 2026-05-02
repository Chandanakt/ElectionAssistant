import ChatBox from './components/ChatBox';
import Timeline from './components/Timeline';
import Quiz from './components/Quiz';

function App() {

  return (
    <div className="container">

      <h1>🗳️ Election Process Education Assistant</h1>

      <p>
        Learn election processes interactively.
      </p>

      <Timeline />

      <ChatBox />

      <Quiz />

    </div>
  );
}

export default App;
