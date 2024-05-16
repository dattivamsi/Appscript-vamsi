import Image from 'next/image'
import React from 'react'

const AllProducts = ({showFilters}) => {
  return (
    <div className={`product-images ${showFilters ? '':'w-100'}`}>
        <Image src='/ProductCard1.png' height={300} width={200} alt='product' className='p1 productimages'/>
        <Image src='/ProductCard2.png' height={300} width={200} alt='product' className='p1 productimages'/>
        <Image src='/ProductCard3.png' height={300} width={200} alt='product' className='p1 productimages'/>
        <Image src='/ProductCard4.png' height={300} width={200} alt='product' className='p1 productimages'/>
        <Image src='/ProductCard5.png' height={300} width={200} alt='product' className='p1 productimages'/>
        <Image src='/ProductCard6.png' height={300} width={200} alt='product' className='p1 productimages'/>
        <Image src='/ProductCard7.png' height={300} width={200} alt='product' className='p1 productimages'/>
        <Image src='/ProductCard8.png' height={300} width={200} alt='product' className='p1 productimages'/>
        <Image src='/ProductCard9.png' height={300} width={200} alt='product' className='p1 productimages'/>
        <Image src='/ProductCard10.png' height={300} width={200} alt='product' className='p1 productimages'/>
        <Image src='/ProductCard11.png' height={300} width={200} alt='product' className='p1 productimages'/>
        <Image src='/ProductCard12.png' height={300} width={200} alt='product' className='p1 productimages'/>
        <Image src='/ProductCard13.png' height={300} width={200} alt='product' className='p1 productimages'/>
        <Image src='/ProductCard14.png' height={300} width={200} alt='product' className='p1 productimages'/>
        <Image src='/ProductCard15.png' height={300} width={200} alt='product' className='p1 productimages'/>
        <Image src='/ProductCard16.png' height={300} width={200} alt='product' className='p1 productimages'/>
        
    </div>
  )
}

export default AllProducts