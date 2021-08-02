import React, { useState } from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./Create";
import BlogDetails from "./BlogDetails";
import NotFound from "./NotFound";
import DarkModeSwitch from "./DarkModeSwitch";

function App() {
    const [isToggled, setIsToggled] = useState(false);
    return (
        <Router>
            <div className="App">
                <DarkModeSwitch
                    isToggled={isToggled}
                    onToggle={() => setIsToggled(!isToggled)}
                />
                <Navbar />
                <div className="content">
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/create">
                            <Create />
                        </Route>
                        <Route path="/blogs/:id">
                            <BlogDetails />
                        </Route>
                        <Route path="*">
                            <NotFound />
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;
