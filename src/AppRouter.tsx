import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { HomePage } from "./features/home/home.page"
import { DetailPage } from "./features/movie-detail/detail.page"

export const AppRouter = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to={"/search"}/>} />
                <Route path="/search" element={<HomePage/>} />
                <Route path="/detail/:id" element={<DetailPage/>} />
            </Routes>
        </BrowserRouter>
    )
}