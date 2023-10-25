import Main from './containers/Main/Main';
import Products from './containers/Proucts/Products';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./privateRoute";

const AppRouter = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/main" element={<Main />} />

            <Route element={<PrivateRoute />}>
                <Route path="/products" element={<Products />} />
            </Route>

            <Route path="*" element={<div>404 | Page is not found !</div>} />
        </Routes>
    </BrowserRouter>
);

export default AppRouter;