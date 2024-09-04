import "../styles/home/search.css"

function Search({search, onChangeSearch, num_posts}){

    return(
        <>
            <div className= "search_content">
                <div className="search">
                    <span>Publicações</span>
                    <span id="pub">{num_posts} publicações</span>
                </div>
                <div className="input">
                    <input type="text" placeholder="Buscar conteúdo" value={search} onChange={onChangeSearch}/>
                </div>
            </div>
        </>
    )

}
export default Search