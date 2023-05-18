const SearchParams = () =>{
    const location = "seatlle,WA";
    return (
        <div className="search-params">
        <form>
            <label htmlFor="location">
                Location:
                <input type="text" name="location" id="location" value={location}  placeholder="location"/>
            </label>
            <button type="submit">Search</button>
        </form>

        </div>
    )
}

export default SearchParams;