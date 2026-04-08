 

import React from 'react'
import Snack  from '../assets/category-Snack-munchies 1.jpg'
import Bakery  from '../assets/category-bakery-biscuits 2.jpg'
import Instant  from '../assets/category-instant-food 3.jpg'
import Tea from '../assets/category-tea-coffee-drinks 4.jpg'
import Ata from '../assets/category-atta-rice-dal_5.jpg'
import Baby from '../assets/category-baby-care 6.jpg'

function Featured() {
const featuredCategories = [
  {
    id: 1,
    title: "Snack & Munchies",
    Image: Snack
  },
  {
    id: 2,
    title: "Bakery & Biscuits",
    Image: Bakery 
  },
  {
    id: 3,
    title: "Instant Food",
    Image: Instant
  },
  {
    id: 4,
    title: "Tea, Coffee & Drinks",
    Image: Tea
  },
  {
    id: 5,
    title: "Atta, Rice & Dal",
    Image: Ata
  },
  {
    id: 6,
    title: "Baby care",
    Image: Baby
  }
];

  return (
    <>
    <div className='w-[1296px] mx-auto'>
       <h2 className='text-[30px] font-semibold mt-[10px]'>Featured Categories</h2>
    <div className='   flex gap-7 mt-[20px] '>
      {featuredCategories.map((items)=>(
          <div key={items.id}>
        
        <div className='border border-[#5C6C75] w-[200px] h-[220px]  rounded-[10px] hover:border-[#0aad0a] hover:shadow-2xl   '>          
            <div className=''>
                <img src={items.Image} alt={items.title} className="  w-[120px] h-[120px] ml-[30px] mt-[10px]"/>
            </div>
              <div className='ml-[40px] mt-[20px]'>
                {items.title}
            </div>
        </div>
         </div>
      ))}
    </div>
    </div>
    </>
 
  )
}

export default Featured
