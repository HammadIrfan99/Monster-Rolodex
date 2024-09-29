//import { Component } from 'react';
import { useEffect, useState } from 'react';
import CardList  from './components/cardList/cardList.component'
import SearchBox from './components/searchBox/searchBox.component'
import './App.css'; 


const App = ()=>{
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters]  = useState([]);
  // const [title, setTitle] = useState('monster rolodex');
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  
  console.log('render')
  useEffect(()=>{ // useEffect() tskes two arguments, first is the task to do, and the second argument (the array) takes the dependencies, and if these dependencied change, useEffect() will run the function as a first argumrnt again, In our case nothing is in the second argument and nothing gonna change so it will run the first argument only first time app renders. This is known as side effect function.
  
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response)=>response.json())
      .then((monsters)=>setMonsters(monsters));

  }, [])


  useEffect(()=>{
    const newFilteredMonsters = monsters.filter((monster)=>{
      return monster.name.toLowerCase().includes(searchField.toLowerCase());
    });
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField])
  

  const onSearchChange = (event) =>{
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  }
  // const onTitleChange = (event) =>{
  //   const titleFieldString = event.target.value.toLowerCase();
  //   setTitle(titleFieldString);
  // }

  return(
    <div className='App'>
      <h1 className='app-title'>Monster Rolodex</h1>
    
      {/* <SearchBox onChangeHandler={onTitleChange} placeHolder = 'Set Title' className = 'title-search-box'></SearchBox> */}
      <SearchBox onChangeHandler={onSearchChange} placeHolder = 'Search Monster' className = 'Monster-search-box'></SearchBox>
      <CardList monsters = {filteredMonsters} ></CardList>
    </div>
  );
}
export default App;



// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchField: ''
//     };
//     // console.log("constructor");
//   }

//   onSearchChange = (event)=>{
//     const searchInput = event.target.value.toLowerCase();
//     this.setState(()=>{return {searchField:searchInput}});
//   }

//   componentDidMount(){
//     // console.log("CDM");
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response)=>response.json())
//     .then((monster)=>{this.setState(
//       ()=>{return{monsters:monster}},
//       ()=>console.log(this.state)
//     )});
//   }

//   render() {
//     // console.log("render");
//     const {monsters , searchField} = this.state;
//     const {onSearchChange} = this;
//     const filteredMonsters = monsters.filter((monster)=>{
//       return monster.name.toLowerCase().includes(searchField.toLowerCase());
//     });
//     return (
//       <div className='App'>
//         <h1 className='app-title'>Monster Rolodex</h1>
//         <SearchBox onChangeHandler={onSearchChange} placeHolder = 'Search Monster' className = 'Monster-search-box'></SearchBox>

//         <CardList monsters = {filteredMonsters} ></CardList>
//       </div>
//     );
//   }
// }

// export default App;


// Here’s the sequence:
// Constructor: Called when the component is first created.
// Render: Called to generate the JSX based on the state/props.
// componentDidMount: Called after the first render, where initial side effects (like fetching data) are done.
// setState (or prop change): When the state is updated (e.g., after fetching data), it triggers a re-render.
// Render: Called again when the state/props are updated.
// componentDidUpdate: Called after the component has been updated in the DOM. This is where you can make further DOM manipulations or trigger additional side effects if needed. Only run if the monsters state has changed