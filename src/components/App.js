import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Home, About, Projects, Header } from "./";

const App = () => {
    return (
        <div>
            <Home />
            <About />
            <Projects />
        </div>
    )
}
export default App;