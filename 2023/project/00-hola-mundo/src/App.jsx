import { useState } from 'react';
import './App.css';
import { FollowCard } from './FollowCard';


export function App() {

    const users = [
        {
            userName: 'Judit Grau',
            alias: 'ditGrau',
            isFollowing: true
        },
        {
            userName: 'Rocio Sendros',
            alias: 'rowi_roowi',
            isFollowing: false
        },
        {
            userName: 'Jose Sanchez',
            alias: 'JSanchez',
            isFollowing: true
        },
    ]

    return (
        <div className='containerCards'> {
            users.map(user => {
                const { userName, alias, isFollowing } = user

                return (
                    <FollowCard
                        key={alias}
                        alias={alias}
                        initialIsFollowing={isFollowing}>
                        {userName}
                    </FollowCard>
                )
            })
        }
        </div>
    )
}
