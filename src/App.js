import Hello from "./Hello";

const title = 'Welcome React with nginx';
const content = `I'm Bang Ju Hyun`;

function App() {
  return (
    <div className="App">
      <Hello title={title} content={content}/>
    </div>
  );
}

export default App;
