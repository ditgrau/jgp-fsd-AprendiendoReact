import { useState } from 'react';
import './FollowCard.css'

export function FollowCard({ children, alias = 'unknown', initialIsFollowing }) {

    const [isFollowing, setIsFollowing] = useState(initialIsFollowing); //useState devuelve un array de dos posiciones con valor y funcion que actualiza el valor
    // lo de dentro del parentesis de useSatet es el valor INICIAL

    const text = isFollowing ? 'Siguiendo' : 'Seguir' //ternaria, condicional
    //cuando en el renderizado, en la App, isFollowing es true: 'siguiendo' 
    const buttonClassName = isFollowing //el boton es = al estado 'isFollowing'???
        ? 'tw-followCard-button is-following' //SÍ, entonces css
        : 'tw-followCard-button' //NO, entonces este css

    const handleClick = () => { //en el handle va el set del useState
        setIsFollowing(!isFollowing) //la funcion del click va cambiando de true a false y viceversa
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
                    <span className='tw-followCard-text'>{text}</span>
                    <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}