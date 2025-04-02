import React from 'react'

const Nav = () => {
    return (
        <div className='flex justify-between bg-[#1F2535] p-[0px] rounded-[24px]'>
            <img src="assets/images/logo.svg" alt="logo" className='ml-[16px] ' />
            <button className='bg-[#2F354B] m-[16] p-[18px] rounded-xl '>
                <img src="assets/images/icon-sun.svg" className='' alt="mode" />
            </button>
        </div>
    )
}

export default Nav