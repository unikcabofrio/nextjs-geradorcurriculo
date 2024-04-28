export function ButtonAdd(props) {
    return (
        <div className='buttonDivs'>
            <span className='barra add' />
            <span className="material-symbols-outlined click add" onClick={() => { props.handleClickAdd() }}>add</span>
        </div>
    );
}

export function ButtonRemove(props) {
    return (
        <>
            {
                props.length > 1 ?
                    <div className='buttonDivs'>
                        <span className='text'>Remover Campo</span>
                        <span className='barra remove' />
                        <span className="material-symbols-outlined click remove" onClick={() => { props.handleClickRemove(props.index) }}>remove</span>
                    </div> :
                    ''
            }
        </>
    );
}

