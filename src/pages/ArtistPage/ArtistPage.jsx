import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import artistHero from '../../assets/artistpage/artist_hero.png'
import copy from '../../assets/artistpage/Copy.png'
import plus from '../../assets/artistpage/Plus.png'

import web from '../../assets/artistpage/Globe.png'
import discordLogo from '../../assets/artistpage/DiscordLogo.png'
import tweeterLogo from '../../assets/artistpage/TwitterLogo.png'
import youtubeLogo from '../../assets/artistpage/YoutubeLogo.png'
import instaLogo from '../../assets/artistpage/InstagramLogo.png'
const ArtistPage = () => {

    const artist_id = useParams()


    const [singleArtistInfo, setSingleArtistInfo] = useState()
    const [activeTab, setActiveTab] = useState(1);

    useEffect(() => {
        fetch('../../../public/json/artists.json')
            .then(res => res.json())
            .then(data => {

                const singleData = data.find(singleArtist => singleArtist._id === parseInt(artist_id?.id))

                setSingleArtistInfo(singleData)
            })
    }, [])
    console.log(singleArtistInfo);

    return (
        <div>
            <figure className="w-full h-[295px]">
                <img className="w-full h-full" src={artistHero} alt="" />
            </figure>

            <div className="my-container">

                {/* hero */}
                <figure className="-mt-16">
                    <img className="rounded-r-lg" src={singleArtistInfo?.artist_img} alt="" />
                </figure>

                <div className="mt-[40px]">
                    {/* profile */}
                    <div className="flex items-center justify-between">

                        <h3 className="text-[51px] font-bold">{singleArtistInfo?.artist_name}</h3>

                        <div className="flex gap-5">
                            <button className="w-[168px] h-[60px] rounded-[20px] bg-[#A259FF] font-bold flex items-center justify-center gap-2">
                                <img src={copy} alt="" />
                                <p>0xc{singleArtistInfo?.artist_name}</p>
                            </button>

                            <button className="w-[168px] h-[60px] rounded-[20px] border-2 border-[#A259FF] font-bold flex items-center justify-center gap-2">
                                <img src={plus} alt="" />
                                <p>Follow</p>
                            </button>
                        </div>
                    </div>
                    {/* info */}
                    <div className="mt-10 flex gap-5">
                        <div>
                            <h3 className="text-[28px] font-bold">{singleArtistInfo?.volume}+</h3>
                            <p className="text-[22px]">Volume</p>
                        </div>
                        <div>
                            <h3 className="text-[28px] font-bold">{singleArtistInfo?.nfts_sold}+</h3>
                            <p className="text-[22px]">NFTs Sold</p>
                        </div>
                        <div>
                            <h3 className="text-[28px] font-bold">{singleArtistInfo?.followers}+</h3>
                            <p className="text-[22px]">Followers</p>
                        </div>
                    </div>
                    {/* bio */}
                    <div className="mt-10">
                        <h3 className="text-[#858584] text-[22px] font-bold">Bio</h3>
                        <p className=" text-[22px]">{singleArtistInfo?.bio}</p>
                    </div>

                    {/* Links */}
                    <div className="mt-10">
                        <h3 className="text-[#858584] text-[22px] font-bold">Links</h3>
                        <div className="mt-[10px] flex gap-[10px]">
                            <Link to={'#'}>
                                <img src={web} alt="" />
                            </Link>
                            <Link to={`${singleArtistInfo?.links?.discord_link}`}>
                                <img src={discordLogo} alt="" />
                            </Link>
                            <Link to={`${singleArtistInfo?.links?.youtube_link}`}>
                                <img src={youtubeLogo} alt="" />
                            </Link>
                            <Link to={`${singleArtistInfo?.links?.tweeter_link}`}>
                                <img src={tweeterLogo} alt="" />

                            </Link>

                            <Link to={`${singleArtistInfo?.links?.instagram_link}`}>

                                <img src={instaLogo} alt="" />

                            </Link>

                        </div>
                    </div>
                    {/* tab heads */}
                    <div className="mt-[40px] flex justify-between  gap-8 lg:gap-3 w-11/12  lg:w-full  mx-auto">
                        {/* created */}
                        <div className='cursor-pointer' onClick={() => setActiveTab(1)}>

                            <div className='flex gap-3 items-center justify-center lg:w-[262px] h-[60px]'>
                                <h3 className={`hidden lg:block text-[16px] lg:text-[22px] ${activeTab === 1 ? '' : 'text-[#858584]'}`}>Created</h3>

                                <div className={`hidden lg:block badge  text-white border-0  
                                ${activeTab === 1 ? 'bg-[#858584]' : 'bg-[#3B3B3B]'}
                                `}>302</div>

                             
                            </div>
                            <div className={`
                                    h-[2px] w-full bg-[#858584]
                                    ${activeTab === 1 ?
                                    'block'
                                    :
                                    'hidden'
                                }
                                `}>

                            </div>
                        </div>

                        {/* Owned */}
                        <div className='cursor-pointer' onClick={() => setActiveTab(2)}>

                            <div className='flex gap-3  items-center justify-center lg:w-[262px] h-[60px]'>
                                <h3 className={`hidden lg:block text-[16px] lg:text-[22px] ${activeTab === 2 ? '' : 'text-[#858584]'}`}>Owned</h3>

                                <div className={`hidden lg:block badge  text-white border-0  
                                ${activeTab === 2 ? 'bg-[#858584]' : 'bg-[#3B3B3B]'}
                                `}>67</div>

                              
                            </div>
                            <div className={`
                                    h-[2px] w-full bg-[#858584]
                                    ${activeTab === 2 ?
                                    'block'
                                    :
                                    'hidden'
                                }
                                `}>

                            </div>
                        </div>

                        {/* Collection */}
                        <div className='cursor-pointer' onClick={() => setActiveTab(3)}>

                            <div className='flex gap-3 items-center justify-center lg:w-[262px] h-[60px]'>
                                <h3 className={`hidden lg:block text-[16px] lg:text-[22px] ${activeTab === 3 ? '' : 'text-[#858584]'}`}>Collection</h3>
                                <div className={`hidden lg:block badge  text-white border-0  
                                ${activeTab === 4 ? 'bg-[#858584]' : 'bg-[#3B3B3B]'}
                                `}>302</div>
                               
                            </div>
                            <div className={`
                                    h-[2px] w-full bg-[#858584]
                                    ${activeTab === 3 ?
                                    'block'
                                    :
                                    'hidden'
                                }
                                `}>

                            </div>
                        </div>



                    </div>
                </div>
            </div>




        </div>
    );
};

export default ArtistPage;