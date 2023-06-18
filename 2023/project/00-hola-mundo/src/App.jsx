import './App.css'
import { FollowCard } from './FollowCard'


export function App() {

    const ditgrau = {isFollowing: true, alias: 'ditGrau'};

    return (
        <div className='containerCards'>
            <FollowCard {...ditgrau}>
                Judit Grau
            </FollowCard>
            <FollowCard isFollowing={false}>
                Miguel Angel Duran
            </FollowCard>
            <FollowCard alias='datata' isFollowing>
                Daniel Profe
            </FollowCard>
            {/* isFollowing es un boleano, al ponerlo sin value por default es true, para darle valor: expresion, entre LLAVES. */}
        </div>
    )
}
