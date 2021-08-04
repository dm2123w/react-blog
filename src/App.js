import React, { useState } from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./Create";
import BlogDetails from "./BlogDetails";
import NotFound from "./NotFound";
import DarkModeSwitch from "./DarkModeSwitch";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./themes";

function App() {
    const [isToggled, setIsToggled] = useState(false);
    const [theme, setTheme] = useState("light");

    const themeToggler = () => {
        theme === "light" ? setTheme("dark") : setTheme("light");
    };

    const StyledApp = styled.div`
        color: ${(props) => props.theme.fontColor};
    `;

    return (
        <Router>
            <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
                <GlobalStyles />
                <StyledApp>
                    <div className="App">
                        <DarkModeSwitch
                            isToggled={isToggled}
                            onToggle={() => setIsToggled(!isToggled)}
                        />
                        <button onClick={() => themeToggler()}>
                            Change Theme
                        </button>
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
                </StyledApp>
            </ThemeProvider>
        </Router>
    );
}

export default App;
