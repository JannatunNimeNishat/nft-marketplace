import signUpHero from '../../assets/signUp/signUp_hero_img.png'
import user from '../../assets/signUp/User.png'
import email from '../../assets/signUp/email.png'
import lock from '../../assets/signUp/LockKey.png'

const SignUp = () => {
    return (
        <div className='gap:flex gap-16'>
            <figure>
                <img src={signUpHero} alt="" />
            </figure>
            <div className='py-5 lg:py-12 px-5 lg:px-0'>
                <h3 className='text-[38px] lg:text-[51px] font-bold'>Create account</h3>
                <p className='lg:text-[22px] pb-[40px] pt-[20px] leading-8'>Welcome! enter your details and start <br /> creating, collecting and selling NFTs.</p>

                <div className=' bg-white text-black pt-3 pr-[40px] pb-3 pl-[40px] rounded-[20px]  flex  items-center gap-3 border '>
                    <img className='h-full' src={user} alt="" />
                    <input type="text" name="" id="" placeholder='Username' />
                    
                </div>
                <div className=' mt-4 bg-white text-black pt-3 pr-[40px] pb-3 pl-[40px] rounded-[20px]  flex  items-center gap-3 border '>
                    <img className='h-full' src={email} alt="" />
                    <input type="email" name="" id="" placeholder='Email Address' />
                    
                </div>

                <div className=' mt-4 bg-white text-black pt-3 pr-[40px] pb-3 pl-[40px] rounded-[20px]  flex  items-center gap-3 border '>
                    <img className='h-full' src={lock} alt="" />
                    <input type="password" name="" id="" placeholder='Password' />
                    
                </div>

                <div className=' mt-4 bg-white text-black pt-3 pr-[40px] pb-3 pl-[40px] rounded-[20px]  flex  items-center gap-3 border '>
                    <img className='h-full' src={lock} alt="" />
                    <input type="password" name="" id="" placeholder='Confirm Password' />
                    
                </div>

               <input className='mt-[30px] w-full h-[46px] bg-[#A259FF] font-semibold rounded-[20px] cursor-pointer' type="submit" value="Create account" />


            </div>
        </div>
    );
};

export default SignUp;