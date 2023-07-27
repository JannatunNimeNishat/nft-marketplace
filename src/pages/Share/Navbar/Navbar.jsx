
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../../public/navbar/logo.png'
import user from '../../../../public/navbar/user.png'

const Navbar = () => {
    const navItems = <>
        <li>
            <NavLink className={'hover:text-white hover:font-semibold'} to='/marketplace' >Marketplace</NavLink>
        </li>
        <li>
            <NavLink className={'hover:text-white hover:font-semibold'} to='/rankings'>Rankings</NavLink>
        </li>
        <li>
            <NavLink className={'hover:text-white hover:font-semibold'} to='/connect-a-Wallet'>Connect a wallet</NavLink>
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
                <Link to='/signup' className="hidden lg:flex btn bg-[#A259FF] rounded-[20px] border-0 text-white font-semibold hover:bg-black hover:text-white">
                    <img src={user}></img>
                    <p>Sign Up</p>
                </Link>
                <Link to='/signup' className=" flex  lg:hidden  btn bg-[#A259FF] rounded-[20px] border-0 text-white font-semibold hover:bg-black hover:text-white">
                    <p>Sign Up</p>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;