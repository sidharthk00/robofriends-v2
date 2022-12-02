import './SearchBox.css'

const SearchBox = ({onSearchChange}) => {
    return(
        <input
        className='search-box'
        type='search'
        placeholder='Search Robots'
        onChange={onSearchChange}/>
    ) 
}    


export default SearchBox;