import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import CreateBlog from "./create";
import BlogLists from "./components/Bloglist";

function App() {
  return (
    <div className="App">
      <NavBar />
      <CreateBlog />
      <BlogLists />
    </div>
  );
}

export default App;
