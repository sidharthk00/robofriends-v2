import { useState,useEffect } from 'react';
import './App.css';
import SearchBox from './component/SearchBox/SearchBox'
import CardList from './component/CardList/CardList'


const App = () => {

 const [searchField,setSearchField] = useState('') ;
 const [robots,setRobots] = useState([])
 
 useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then((response)=> response.json())
  .then((users)=>setRobots(users));
 },[])

 const onSearchChange = (event) => {
    const searchFieldString =  event.target.value.toLocaleLowerCase();
   setSearchField(searchFieldString)
}
 const filteredRobots = robots.filter((robot)=>{
    return robot.name.toLocaleLowerCase().includes(searchField)
  })

  return(
    <div className='App' key={1}>
    <h1 className='app-title'>ROBOFRIENDS</h1>
   <SearchBox onSearchChange={onSearchChange}/>
   <CardList robots = {filteredRobots}/>
    </div>
  );
}

export default App;
