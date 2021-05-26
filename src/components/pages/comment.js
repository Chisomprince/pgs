import React from 'react'
import Card from '../common/card'
import CommentBlock from '../comments/commentBlock'
import Trending from '../common/trending'
import CommentCard from '../comments/commentCard'
import Chatbox from '../chats/chatbox'


export default function Comment() {
    return (
        <div className='w-full grid grid-cols-1 lg:grid-cols-3 lg:gap-4 '>
            {/*   <div className='col-span-3'>
                <Title />
            </div> */}
            <div className='col-span-2 w-full items-center justify-center flex flex-col p-4'>
                <CommentCard />
                <CommentBlock />
                <CommentBlock />
                <CommentBlock />
            </div>
            <div className='hidden lg:block'>
                <Chatbox />
                {/* <Trending /> */}
            </div>
        </div>

    )
}
