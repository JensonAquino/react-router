import { BrowserRouter, Route, Routes } from "react-router-dom";
import PostList from "./components/PostsList";
import ChiSiamo from "./components/ChiSiamo";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import AppLayout from "./components/AppLayout";
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout/>}>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/ChiSiamo" element={<ChiSiamo/>}/>
          <Route path="/PostList" element={<PostList/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;