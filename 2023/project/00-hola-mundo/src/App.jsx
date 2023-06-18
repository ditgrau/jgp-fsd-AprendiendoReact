import './App.css'
import { FollowCard } from './FollowCard'

export function App() {
    return (
        <div className='containerCards'>
            <FollowCard userName='Judit Grau' alias='ditGrau' isFollowing/>
            <FollowCard userName='Miguel Angel Duran' alias='midudev' isFollowing={false}/>
            <FollowCard userName='Daniel Profe' alias='datata' isFollowing/>
            {/* isFollowing es un boleano, al ponerlo sin value por default es true, para darle valor: expresion, entre LLAVES. */}
        </div>
    )
}
