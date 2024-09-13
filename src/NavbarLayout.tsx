import { Outlet } from "react-router-dom"
import { Footer, Navbar } from "./components"

export const NavbarLayout = () => {
    return (
        <>
            <Navbar />
            <div>
                <Outlet />
            </div>
            <Footer />
        </>
    )
}