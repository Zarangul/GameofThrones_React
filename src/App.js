import { useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

import { Home } from "pages/Home";
import { About } from "pages/About";
import { Contact } from "pages/Contact";
import { Phone } from "pages/Phone";
import { Login } from "pages/Login";
import { Mail } from "pages/Mail";
import { Chars } from "pages/Chars";
import CharInfo from "pages/Chars/CharInfo";
import Layout from "layout";
import { ProtectedRoute } from "routes";
import "./App.css";

function App() {
  const [auth, setAuth] = useState(JSON.parse(localStorage.getItem("auth")));
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(()=>{
    if (!!auth && location.pathname==='/login') {
      navigate('/')
    }
  },[location.pathname])

  useEffect(() => {
    if (!JSON.parse(localStorage.getItem("auth"))) {
      localStorage.setItem("auth", JSON.stringify(false));
      setAuth(JSON.parse(localStorage.getItem("auth")));
    } else {
      localStorage.setItem("auth", JSON.stringify(true));
      setAuth(JSON.parse(localStorage.getItem("auth")));
    }
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/login" exact element={<Login setAuth={setAuth} />} />

        <Route element={<ProtectedRoute auth={auth} />}>
          <Route element={<Layout setAuth={setAuth}/>}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/chars" element={<Chars />} />
            <Route path="/charinfo/:id" element={<CharInfo />} />
            <Route path="/contact" element={<Contact />}>
              <Route path="phone" element={<Phone />} />
              <Route path="mail" element={<Mail />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
