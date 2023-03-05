import React from 'react'
import OrderStat from '../components/OrderStat'
import data from '../assets/data.json'

const WidgetOrderStats = () => {
    return (
        <div className='w-screen h-screen p-4'>
            <div className='max-w-[1300px] mx-auto p-12 rounded-2xl shadow-2xl bg-white  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-16'>
                {data && data.map((element) => (
                    < OrderStat key={element.name} data={element} />
                ))}

            </div>


        </div >
    )
}

export default WidgetOrderStats
