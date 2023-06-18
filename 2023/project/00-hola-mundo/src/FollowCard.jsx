import './FollowCard.css'

export function FollowCard({ userName , alias , isFollowing}) {

    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-img' alt='avatar' src={`https://unavatar.io/${alias}`}></img>
                <div className='tw-followCard-info'>
                    <strong className='tw-followCard-infoUserName'>{userName}</strong>
                    <span className='tw-followCard-infoAliasName'>{alias}</span>
                </div>
            </header>
            <aside>
                <button className='tw-followCard-button'>
                    Seguir
                </button>
            </aside>
        </article>
    )
}