import Image from 'next/image'
import brand from './images/brand.webp'
import brandMask from './images/brand_mask.webp'

export default function Home () {
  return (
    <div className='p-22'>
      <h1 className='text-white text-center text-[36px] font-bold uppercase mb-12'>
        Dashboard
      </h1>
      <div className='relative h-150 w-350 mx-auto mb-12'>
        <Image 
          src={brand} 
          alt='brand' 
          fill
          className='object-cover'
          style={{ 
            maskImage: `url(${brandMask.src})`,
            maskPosition: "center",
            maskSize: "contain",
            maskRepeat: 'no-repeat'
          }} 
        />
      </div>
      <div className='text-white text-center text-[24px] mb-50'>
        Your personal view, and token management
      </div>
      <div className='text-center'>
        <button className='cursor-pointer px-22 py-9 bg-white rounded-full text-[28px] text-black'>
          Connect Wallet
        </button>
      </div>
      
    </div>
  )
}