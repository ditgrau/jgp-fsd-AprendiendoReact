import './App.css'

export function App() {
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-img'alt='avatar' src='https://unavatar.io/ditgrau'></img>
                <div className='tw-followCard-info'>
                    <strong className='tw-followCard-infoUserName'>Judit Grau Puigdollers</strong>
                    <span className='tw-followCard-infoAliasName'>@ditGrau</span>
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
