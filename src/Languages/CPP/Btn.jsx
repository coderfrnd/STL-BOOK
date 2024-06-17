import React from 'react'

function Btn({lable}) {
  return (
    <div className='px-4'>
        <div>
            <button className='flex justify-center items-center button rounded-2xl p-2 my-2 w-20 bg-[#9AE9FA]'>{lable}</button>
        </div>
    </div>
  )
}

export default Btn