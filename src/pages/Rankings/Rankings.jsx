import { useState } from "react";


const Rankings = () => {
    const [activeTab, setActiveTab] = useState(1)
    return (
        <div className="lg:w-[1000px]  lg:py-[50px] mx-auto px-5 lg:px-0 ">
            <h3 className="text-[22px] lg:text-[51px] font-bold">Top Creators</h3>
            <p className="text-[16px] lg:text-[22px] pt-1">Check out top ranking NFT artists on the NFT Marketplace.</p>
            {/*  */}
            <div className=' pt-10 lg:pt-20  flex  gap-8 lg:gap-3 w-11/12 lg:w-full  mx-auto'>

                {/* Today */}
                <div className='cursor-pointer' onClick={() => setActiveTab(1)}>

                    <div className='flex  items-center justify-center lg:w-[262px] h-[60px]'>
                        <h3 className={`hidden lg:block text-[16px] lg:text-[22px] ${activeTab === 1 ? '' : 'text-[#858584]'}`}>Today</h3>

                        <h3 className={` block lg:hidden text-[16px] lg:text-[22px] ${activeTab === 1 ? '' : 'text-[#858584]'}`}>1d</h3>
                    </div>
                    <div className={`
                    h-[2px] w-full bg-[#858584]
                    ${activeTab === 1 ?
                            'block'
                            :
                            'hidden'
                        }
                    `} ></div>
                </div>

                {/* This Week */}
                <div className='cursor-pointer' onClick={() => setActiveTab(2)}>

                    <div className='flex  items-center justify-center lg:w-[262px] h-[60px]'>
                        <h3 className={`lg:block hidden text-[16px] lg:text-[22px] ${activeTab === 2 ? '' : 'text-[#858584]'}`}>This Week</h3>

                        <h3 className={`block lg:hidden text-[16px] lg:text-[22px] ${activeTab === 2 ? '' : 'text-[#858584]'}`}>7d</h3>

                    </div>
                    <div className={`
                    h-[2px] w-full bg-[#858584]
                    ${activeTab === 2 ?
                            'block'
                            :
                            'hidden'
                        }
                    `} ></div>
                </div>
                {/* This Month */}
                <div className='cursor-pointer' onClick={() => setActiveTab(3)}>

                    <div className='flex  items-center justify-center lg:w-[262px] h-[60px]'>
                        <h3 className={`lg:block hidden text-[16px] lg:text-[22px] ${activeTab === 3 ? '' : 'text-[#858584]'}`}>This Month</h3>

                        <h3 className={`block lg:hidden text-[16px] lg:text-[22px] ${activeTab === 3 ? '' : 'text-[#858584]'}`}>30d</h3>

                    </div>
                    <div className={`
                    h-[2px] w-full bg-[#858584]
                    ${activeTab === 3 ?
                            'block'
                            :
                            'hidden'
                        }
                    `} ></div>
                </div>
                {/* All Time */}
                <div className='cursor-pointer' onClick={() => setActiveTab(4)}>

                    <div className='flex  items-center justify-center lg:w-[262px] h-[60px]'>
                        <h3 className={`text-[16px] lg:text-[22px] ${activeTab === 4 ? '' : 'text-[#858584]'}`}>All Time</h3>

                    </div>
                    <div className={`
                    h-[2px] w-full bg-[#858584]
                    ${activeTab === 4 ?
                            'block'
                            :
                            'hidden'
                        }
                    `} ></div>
                </div>



            </div>
        </div>
    );
};

export default Rankings;