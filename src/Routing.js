import React, { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function Routing() {
    return (
      <Routes>

          <Route path="/" element={<Home/>}> </Route>
          <Route path="/about" element={<About/>} />
          <Route path="*" element={<NotFound/>} />
  
      </Routes>

    );
  }

  export default Routing;