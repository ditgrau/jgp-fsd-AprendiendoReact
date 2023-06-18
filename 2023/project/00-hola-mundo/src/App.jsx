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
            alias: 'Rowi',
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
                        alias={alias}
                        isFollowing={isFollowing}>
                            {userName}
                    </FollowCard>
                )
            })
        }
        </div>
    )
}
