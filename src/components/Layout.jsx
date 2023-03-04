import { Link, Outlet } from "react-router-dom"

const Layout = () => {
    return (
        <>
            <header className='header'>
                <Link to="/">Home</Link>
                <Link to="/posts">Posts</Link>
                <Link to="/about">About</Link>
            </header>

            <Outlet/>
        </>
    )
}

export {Layout}