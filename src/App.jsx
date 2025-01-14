import { BrowserRouter, Route, Routes } from "react-router-dom";
import PostList from "./components/PostsList";
import ChiSiamo from "./components/ChiSiamo";
function App() {
  return (
    <>
    <BrowserRouter>
      
    </BrowserRouter>
      <PostList/>
      {/* <ChiSiamo/>
      <HomePage/> */}
    </>
  );
}

export default App;