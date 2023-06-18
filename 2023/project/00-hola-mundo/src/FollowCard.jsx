import { useState } from 'react';
import './FollowCard.css'

export function FollowCard({ children , alias = 'unknown' }) {

const [isFollowing, setIsFollowing] = useState(false); //useState devuelve un array de dos posiciones con valor y funcion que actualiza el valor
// lo de dentro del parentesis de useSatet es el valor INICIAL

const text = isFollowing ? 'Siguiendo' : 'Seguir' //ternaria, condicional
//cuando en el renderizado, en la App, isFollowing es true: 'siguiendo' 
const buttonClassName = isFollowing
? 'tw-followCard-button is-following'
: 'tw-followCard-button' 

const handleClick = () => {
    setIsFollowing(!isFollowing)
}
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-img' alt='avatar' src={`https://unavatar.io/${alias}`}></img>
                <div className='tw-followCard-info'>
                    <strong className='tw-followCard-infoUserName'>{children}</strong>
                    <span className='tw-followCard-infoAliasName'>@{alias}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    {text}
                </button>
            </aside>
        </article>
    )
}