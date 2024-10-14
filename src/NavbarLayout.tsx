import { Outlet } from "react-router-dom"
import { Footer, Navbar } from "./components"

export const NavbarLayout = () => {

    // const { pathname} = useLocation();

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