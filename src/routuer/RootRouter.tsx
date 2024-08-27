import Layout from "@layouts/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const RootRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<></>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RootRouter;
