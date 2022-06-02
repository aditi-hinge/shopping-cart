import "./styles.css";
import Navbar from "./components/Navbar";
import Announcements from "./components/Announcements";
import Slider from "./components/Slider";

export default function App() {
  return (
    <div className="App">
      <h1>
        <Announcements />
        <Navbar />
        <Slider />
      </h1>
    </div>
  );
}

