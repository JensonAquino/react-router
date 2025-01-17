import { BrowserRouter, Route, Routes } from "react-router-dom";
import PostList from "./components/pages/guest/PostsList";
import ChiSiamo from "./components/pages/guest/ChiSiamo";
import NavBar from "./components/NavBar";
import HomePage from "./components/pages/guest/HomePage";
import AppLayout from "./components/AppLayout";
import LoginPage from "./components/pages/admin/LoginPage";
import DashboardPage from "./components/pages/admin/DashboardPage";
import ProductsPage from "./components/pages/guest/ProductsPage";
import SingProd from "./components/pages/guest/SingProd";
import NotFoundPage from "./components/pages/admin/NotFoundPage";
import CreatePostPage from "./components/pages/admin/CreatePostPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/ChiSiamo" element={<ChiSiamo />} />
            <Route path="/PostList" element={<PostList />} />
            <Route path="/products">
              <Route index element={<ProductsPage />} />
              <Route path=":id" element={<SingProd />} />
            </Route>

            <Route path="/admin">
              <Route path="login" element={<LoginPage />} />
              <Route path="dashboard" element={<DashboardPage />} />
              <Route path="create" element={<CreatePostPage />} />
            </Route>
            <Route path="*" element={<NotFoundPage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;