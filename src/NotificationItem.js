import React from 'react'

export default function NotificationItem({ item }) {
    return (
        <div class="Notification" data-status={item.status}>
            <table>
                <colgroup>
                    <col span="1" style={{width: 90 + 'px'}} />
                    <col span="1" style={{width: 100 + '%'}} />
                    {item.bonusImageUrl != null
                        && <col span="1" style={{width: 90 + 'px'}} />
                    }
                </colgroup>
                <tbody>
                    <tr>
                        <td>
                            <img class="NotificationContent" src={item.imageUrl}/>
                        </td>
                        <td>
                            <div class="NotificationContent">
                                <p>{item.Content.map((x, i) =>
                                    {
                                        return <span key={i} class={x.className}>{x.text}</span>
                                    })}<span class="unreadDot"></span></p>
                                <p>{item.TimeAgo}</p>
                            </div>
                        </td>
                        {item.bonusImageUrl != null
                           && <td>
                                <img class="bonusImage" src={item.bonusImageUrl}/>
                            </td>
                        }
                    </tr>
                    {item.bonusMessage != null
                        && <tr>
                            <td></td>
                            <td>
                                <div class="privateMessageText">
                                    {item.bonusMessage}
                                </div>
                            </td>
                        </tr>
                    }
                </tbody>
            </table>
        </div>
    )
}