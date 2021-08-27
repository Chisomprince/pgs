import React, { useContext } from 'react'
import Context from '../../context/context'
import Card from '../common/card'
import Title from '../common/title'
import Trending from '../common/trending'
import Index from '../profile/editprofile'
import User from '../profile/user'

export default function Profile() {
    const user = useContext(Context)

    console.log(user)
    return (
        <div className='w-full grid grid-cols-1 lg:grid-cols-3 lg:gap-4 '>
            <div className='col-span-3'>
                <Title title='My Profile' />
            </div>
            <div className='col-span-2 w-full items-center justify-center flex flex-col p-4'>
                <User />
                <Card />
                <Card />
                <Card />
            </div>
            <div className='hidden lg:block'>
                <Trending />
            </div>
        </div>

    )
}
