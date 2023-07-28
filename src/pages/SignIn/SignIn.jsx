import singUpHero from '../../assets/signUp/signUp_hero_img.png'
import lock from '../../assets/signUp/LockKey.png'
import email from '../../assets/signUp/email.png'
import { Link } from 'react-router-dom';

const SignIn = () => {
    return (
        <>
            <div className='lg:flex gap-16'>
                <figure>
                    <img src={singUpHero} alt="" />
                </figure>
                <div className='py-5 lg:py-12 px-5 lg:px-0'>
                    <h3 className='text-[38px] lg:text-[51px] font-bold'>Please Login</h3>
                    <p className='lg:text-[22px] pb-[40px] pt-[20px] leading-8'>Welcome back start from where you left</p>


                    <div className=' mt-4 bg-white text-black pt-3 pr-[40px] pb-3 pl-[40px] rounded-[20px]  flex  items-center gap-3 border '>
                        <img className='h-full' src={email} alt="" />
                        <input type="email" name="" id="" placeholder='Email Address' />

                    </div>

                    <div className=' mt-4 bg-white text-black pt-3 pr-[40px] pb-3 pl-[40px] rounded-[20px]  flex  items-center gap-3 border '>
                        <img className='h-full' src={lock} alt="" />
                        <input type="password" name="" id="" placeholder='Password' />

                    </div>



                    <input className='mt-[30px] w-full h-[46px] bg-[#A259FF] font-semibold rounded-[20px] cursor-pointer' type="submit" value="Create account" />

                     <p className='pt-2 text-right'><small>Don't have an account ? please <Link to='/signUp' className='text-[#A259FF] font-bold'>SignUp</Link></small></p>

                </div>
            </div>
        </>

    );
};

export default SignIn;