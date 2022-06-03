import "./styles.css";
import Navbar from "./components/Navbar";
import Announcements from "./components/Announcements";
import Slider from "./components/Slider";
import Categories from "./components/Categories";

export default function App() {
  return (
    <div className="App">
      <h1>
        <Announcements />
        <Navbar />
        <Slider />
        <Categories />
      </h1>
    </div>
  );
}
