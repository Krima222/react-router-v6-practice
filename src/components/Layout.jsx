import { NavLink, Outlet } from "react-router-dom"

const Layout = () => {
    // const setActive = ({isActive}) => isActive ? 'active-link' : '';
    return (
        <>
            <header className='header'>
                {/* <NavLink to="/" className={setActive}>Home</NavLink> */}
                <NavLink to="/">Home</NavLink>
                <NavLink to="/posts">Posts</NavLink>
                <NavLink to="/about">About</NavLink>
            </header>

            <Outlet/>
        </>
    )
}

export {Layout}