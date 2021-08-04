import React, { useState } from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./Create";
import BlogDetails from "./BlogDetails";
import NotFound from "./NotFound";
import DarkModeSwitch from "./DarkModeSwitch";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./themes";

function App() {
    const [isToggled, setIsToggled] = useState(false);

    const [theme, setTheme] = useState("light");

    const themeToggler = () => {
        theme === "light" ? setTheme("dark") : setTheme("light");
    };

    return (
        <Router>
            <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
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
            </ThemeProvider>
        </Router>
    );
}

export default App;
