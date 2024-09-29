// import { Component } from "react";
import './searchBox.style.css'

const searchBox = (({onChangeHandler, placeHolder, className})=>(
  <div>
    <input type="search" className={`search-box ${className}`} placeHolder = {placeHolder} 
    onChange={onChangeHandler}/>
  </div>
));
export default searchBox;

// class SearchBox extends Component{
//     render() {
//         const {onChangeHandler, placeHolder, className} = this.props
//       return (
//         <div>
//           <input type="search" className={`search-box ${className}`} placeholder={placeHolder} 
//           onChange={onChangeHandler} //whenever render is called this function is going to initialize from scratch, that is why we have moved it out, so that it should be initialized once to improve performance.
//         />
//         </div>
//       )
//     }
// }

// export default SearchBox;