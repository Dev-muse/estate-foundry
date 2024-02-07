
import Image from 'next/image';
import Search from './Search';
import Hero from '@/public/assets/img/house-banner.png'

const Banner = () => {
  return (
    <section className='h-full max-h-[640px] mb-8 xl:mb-24'>
      <div className="flex flex-col lg:flex-row ">
        <div className="flex flex-1 flex-col lg:ml-8 xl:ml-[135px] items-center lg:items-start
        text-center lg:text-left justify-center px-4 lg:px-0 ">
          <h1 className='text-4xl lg:text-[60px] font-bold leading-none mb-6'>Find Your
            <span className='text-violet-900'> Dream</span> Home.</h1>
          <p className='max-w-[480px] mb-8'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod totam corrupti illum nihil voluptatum dolore odio delectus et sint ratione?</p>
        </div>
        {/* banner img */}
        <div className='hidden lg:flex flex-1 justify-end items-end'>
          <Image src={Hero} alt="" />
        </div>
      </div>
      <Search />
    </section>
  )
};

export default Banner;
