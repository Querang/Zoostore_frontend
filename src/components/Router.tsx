import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./screens/home/Home";
import CategoryDetail from "./screens/category-detial/CategoryDetail";
export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Home/>} path={'/'}/>
                <Route element={<CategoryDetail/>} path={'/category/:id'}/>
                <Route path='*' element={<div>Not found</div>}/>
            </Routes>
    </BrowserRouter>
    )
}