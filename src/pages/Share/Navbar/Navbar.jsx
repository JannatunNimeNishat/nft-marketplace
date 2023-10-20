
import { Link, NavLink, json, useNavigate } from 'react-router-dom';
import logo from '../../../../public/navbar/logo.png'
import user from '../../../../public/navbar/user.png'
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';

const Navbar = () => {

    const { logout,checkLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogout = () => {
        logout()
            .then((res) => {
                const url = new URL(res.url)
                navigate(url.pathname)
                /* console.log(res);
                return res.json() */
            })
            .then(data => {
                console.log(data);
            })
    }

    const navItems = <>
        <li>
            <NavLink
                className={`text-white font-bold hover:text-white
                my-hover-effect
                `
                } to='/marketplace'


            >Marketplace</NavLink>
        </li>
        <li>
            <NavLink className={`text-white font-bold hover:text-white 
            
            my-hover-effect
            `} to='/rankings'>Rankings</NavLink>
            {/* transition ease-in-out hover:translate-x-all hover:translate-y-all delay-100 hover:scale-90 duration-200 */}
        </li>
        <li>
            <NavLink className={`text-white font-bold hover:text-white 
        
            my-hover-effect
            `} to='/connect-a-Wallet'>Connect a wallet</NavLink>

        </li>
        {/* -------------- */}
        <li>
            <NavLink className={`text-white font-bold hover:text-white 
        
            my-hover-effect
            `} to='#'
                onClick={handleLogout}
            >Logout</NavLink>

        </li>
        <li>
            <NavLink className={`text-white font-bold hover:text-white 
        
            my-hover-effect
            `} to='#'
                onClick={checkLogin}
            >check login</NavLink>

        </li>

    </>
    return (
        <div className="navbar lg:px-10 py-5 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case lg:text-xl  mr-2">
                    <img className='h-6 w-6 block lg:hidden ' src={logo} alt="" />
                    <img className='hidden lg:block' src={logo} alt="" />
                    <h3>NFT Marketplace</h3>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                <Link to='/signIn' className="hidden lg:flex btn bg-[#A259FF] rounded-[20px] border-0 text-white font-semibold hover:bg-black hover:text-white
                my-hover-effect
                ">
                    {/*  transition ease-in-out delay-75 hover:translate-x-all hover:translate-y-all hover:scale-90 duration-200 */}
                    <img src={user}></img>
                    <p>Sign In</p>
                </Link>
                <Link to='/signIn' className=" flex  lg:hidden  btn bg-[#A259FF] rounded-[20px] border-0 text-white font-semibold hover:bg-black hover:text-white
               
                ">
                    <p>Sign In</p>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;