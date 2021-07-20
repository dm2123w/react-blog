import Navbar from "./Navbar";
import Home from "./Home";
import Post from "./Post";

function App() {
    return (
        <div className="App">
            <Navbar />
            <div className="content">
                <Home />
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    );
}

export default App;
