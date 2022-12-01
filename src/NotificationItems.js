import React from 'react'
import NotificationItem from './NotificationItem'

export default function NotificationItems({ items }) {

    return (
        items.map(x => {
            return <NotificationItem key={x.id} item={x} />
        })
    )
}