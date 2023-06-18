import './FollowCard.css'

export function FollowCard({ children , alias = 'unknown', isFollowing}) {

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
                <button className='tw-followCard-button'>
                    Seguir
                </button>
            </aside>
        </article>
    )
}