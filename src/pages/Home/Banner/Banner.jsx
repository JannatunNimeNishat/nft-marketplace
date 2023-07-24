
import bannerImg from '../../../../public/banner/bannerImg.png'
import b1 from '../../../../public/banner/b1.png'
import rocket from '../../../../public/banner/RocketLaunch.png'

const Banner = () => {
    return (
        <div className=" lg:mt-8 px-4 lg:px-0 my-container">
            <div className="rounded-md lg:flex">
            {/* <div className="w-[1200px] px-10   rounded-md flex   text-center"> */}
                <div className='w-full lg:w-1/2 '>
                    <h3 className='text-[47px] font-bold leading-tight'>Discover <br /> Digital Art & <br /> Collect NFTs</h3>
                    <p className='mt-5 text-xl'>
                        NFT marketplace UI created with Anima for <br /> Figma. Collect, buy and sell art from more <br /> than 20k NFT artists.
                    </p>

                    <button className='my-[30px] bg-[#A259FF] rounded-[20px] px-[50px] flex items-center gap-2 h-[60px] btn-hover'>
                        <img src={rocket}></img>
                        <p className='font-semibold'>Get Started</p>
                    </button>

                    <div className='grid grid-cols-3  lg:mr-20'>
                        <div className=''>
                            <h3 className='text-[22px] font-semibold'>240k+</h3>
                            <p className=' text-[18px]'>Total Sale</p>
                        </div>
                        <div className=''>
                            <h3 className='text-[22px] font-semibold'>100k+</h3>
                            <p className=' text-[18px]'>Auctions</p>
                        </div>
                        <div className=''>
                            <h3 className='text-[22px] font-semibold'>240k+</h3>
                            <p className=' text-[18px]'>Artists</p>
                        </div>
                    </div>
                </div>
                <div className='w-full lg:w-1/2 rounded-lg mt-5 lg:mt-0'>
                    <figure className='lg:h-[370px] lg:w-[510px]'>
                        <img className='h-full w-full ' src={bannerImg}></img>
                    </figure>
                    <div className='lg:h-[109px] lg:w-[510px] py-5 px-6 bg-[#3B3B3B] rounded-lg '>
                        <h3 className='font-semibold text-xl text-left'>Space Walking</h3>
                        <div className='flex items-center gap-2 pt-3'>
                            <img src={b1} alt="figure" />
                            <p>Animakid</p>
                        </div>
                    </div>

            
                </div>
            </div>
        </div>
    );
};

export default Banner;