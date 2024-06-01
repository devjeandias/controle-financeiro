import { Outlet } from "react-router-dom"
import Header from "../components/header"

function Layout() {
    return (
        <>
            <Header />

            <main>
                <div className="container mx-auto px-4 sm:px-0">
                    <Outlet />
                </div>
            </main>
        </>
    )
}
export default Layout