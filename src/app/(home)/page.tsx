import Image from 'next/image'
import brand from './images/brand.webp'
import brandMask from './images/brand_mask.webp'

export default function Home () {
  return (
    <div className='px-22 py-64 flex flex-col w-fit mx-auto'>
      <article className='prose dark:!prose-invert'>
        <h1>
          Dashboard
        </h1>
        <div className='relative h-150 w-full'>
          <Image 
            src={brand} 
            alt='brand' 
            fill
            className='object-cover !m-0'
            style={{ 
              maskImage: `url(${brandMask.src})`,
              maskPosition: "center",
              maskSize: "contain",
              maskRepeat: 'no-repeat'
            }} 
          />
        </div>
        <p>
          Your personal view and token management, work in progress.
        </p>
        <p>
          Stay tuned with <a className='text-blue' href="https://t.me/co_ca_lab">Co.Ca. Lab</a>
        </p>
      </article>
    </div>
  )
}