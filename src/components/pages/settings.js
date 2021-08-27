import React from 'react'
import Title from '../common/title'
import Messaging from '../profile/settings/messaging'
import UserSettings from '../profile/settings/notifications'

export default function Settings() {
    return (
        <div>
            <Title title='Settings' />
            <UserSettings />
            <Messaging />

        </div>
    )
}
