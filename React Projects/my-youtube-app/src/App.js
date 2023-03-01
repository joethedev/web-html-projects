import "./App.css";
import Video from "./components/Videos";
import Card from "./components/Cards";

function App() {
  return (
    <div className="App">
      <div className="video-grid">
        <div className="video-preview">
          <Video duration="13:44"/>
          <Card
            title="7 books to read"
            author="Joe Idrissi"
            views="3M"
            date="Jan 28"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
