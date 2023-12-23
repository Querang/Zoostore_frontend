import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./screens/home/Home";
import CategoryDetail from "./screens/category-detial/CategoryDetail";
import CreateCategoryForm from "./ui/create-category-form/CreateCategoryForm";
export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Home/>} path={'/'}/>
                <Route element={<CategoryDetail/>} path={'/categories'}/>
                <Route element={<CreateCategoryForm/>} path={'/createcat/'}/>
                <Route path='*' element={<div>Not found</div>}/>
            </Routes>
    </BrowserRouter>
    )
}