import React from 'react'
import { GoArrowSmallUp, GoArrowSmallDown } from 'react-icons/go'
import { BsArrowUpRightCircleFill } from 'react-icons/bs'
import { HiShoppingCart } from 'react-icons/hi'
import { GiKnifeFork } from 'react-icons/gi'
import { SiBuymeacoffee } from 'react-icons/si'

const OrderStat = ({ data }) => {
    return (
        <div className='hover:scale-105 hover:duration-500 hover:transition-all'>
            <div className='flex flex-row justify-between items-center'>
                <h1 className='text-2xl font-bold'>{data.name}</h1>
                <div className='flex flex-row items-center' >
                    {data.state === "decrement" ? <GoArrowSmallDown className='text-4xl text-red-600' /> : <GoArrowSmallUp className='text-4xl text-green-400' />}
                    <p className={`${data.state === "decrement" ? "text-xl font-bold text-red-600" : "text-xl font-bold text-green-400"}`}>{data.static}%</p>
                </div>
            </div>
            <div className='flex flex-row items-center gap-8 mt-8'>
                {data?.name === "Revenue" ? <BsArrowUpRightCircleFill className='text-orange-400 text-5xl' />
                    : data?.name === "Orders" ? <div className='bg-green-400 rounded-full p-2 w-fit'><HiShoppingCart className='text-3xl text-white' /></div>
                        : data?.name === "Dine in" ? <div className='bg-red-600 rounded-full p-2 w-fit'><GiKnifeFork className='text-3xl text-white' /></div> :
                            <div className='bg-yellow-400 rounded-full p-2 w-fit'><SiBuymeacoffee className='text-3xl text-white' /></div>
                }


                <h1 className='text-4xl font-bold'>{data.value}</h1>


            </div>
        </div >
    )
}

export default OrderStat
