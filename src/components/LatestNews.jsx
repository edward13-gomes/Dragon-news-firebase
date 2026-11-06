

import MarqueeImport from 'react-fast-marquee';

const Marquee = MarqueeImport.default || MarqueeImport;

const LatestNews = () => {
    return (
        <div className='flex items-center gap-5 bg-base-200 p-3'>
            <p className='text-base-100 bg-secondary px-3 py-2'>Latest</p>
            <Marquee pauseOnHover={true} className="flex gap-5 " speed={60}>
                <p className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, corrupti?</p>
                <p className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, corrupti?</p>
                <p className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, corrupti?</p>
            </Marquee>
        </div>
    );
};

export default LatestNews;