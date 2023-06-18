import './App.css'
import { FollowCard } from './FollowCard'

export function App() {
    return (
        <div className='containerCards'> 
            <FollowCard userName='Judit Grau' alias='ditGrau' />
            <FollowCard userName='Miguel Angel Duran' alias='midudev' />
            <FollowCard userName='Daniel Profe' alias='datata' />
        </div>
    )
}
