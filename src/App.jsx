import { Routes, Route } from "react-router-dom";
import "./App.css";
import Album from "./components/Album";
import Chuck from "./components/Chuck";
import Chucks from "./components/Chucks";
import Items from "./components/Items";
import Title from "./components/Title";
import User from "./components/user/User";
import HomePage from "./components/pages/home/HomePage";
import NotFound from "./components/NotFound";
import SharedLayout from "./components/layouts/SharedLayout";
import Avatar from "./components/user/Avatar";
import Login from "./components/user/Login";
import Counter from "./components/Counter";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Counter />} />
        {/* <Route index element={<HomePage />} /> */}
        <Route path="users/login" element={<Login />} />
        <Route path="users/:userId" element={<User />} />
        <Route path="users/:userId/avatar" element={<Avatar />} />
        <Route path="albums/:albumId" element={<Album />} />
        <Route path="*" element={<NotFound />} />
        {/* <Items /> */}
        {/* <Title /> */}
        {/* <Chuck /> */}
        {/* <Chucks /> */}
      </Route>
    </Routes>
  );
};

export default App;

// https://ellie-app.com/jxbbwVs8Qxxa1
