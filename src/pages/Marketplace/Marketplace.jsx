import magnifyingGlass from '../../assets/marketplace/MagnifyingGlass.png'

const Marketplace = () => {
    return (
        <div>
            <div className="w-[1000px] py-[50px] mx-auto">
                <h3 className="text-[51px] font-bold">Browse Marketplace</h3>
                <p className="text-[22px] pt-1">Browse through more than 50k NFTs on the NFT Marketplace.</p>
                <div className="pt-8 flex items-center">
                    <input className="border border-[#3B3B3B] w-full bg-transparent py-3 px-5 rounded-[20px]" type="email" name="" id="" placeholder="Search your favourite NFTs" />
                    <img className='-ml-10' src={magnifyingGlass} alt="" />
                </div>
            </div>
            <div className='h-[1px] w-full bg-[#3B3B3B] mt-8'></div>
        </div>
    );
};

export default Marketplace;