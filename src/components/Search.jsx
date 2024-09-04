function Search({search, onChangeSearch, num_posts}){

    return(
        <>
            <div>
                <div>
                    <span>Publicações</span>
                    <span>{num_posts}</span>
                </div>
                <div>
                    <input type="text" placeholder="Buscar conteúdo" value={search} onChange={onChangeSearch}/>
                </div>
            </div>
        </>
    )

}
export default Search