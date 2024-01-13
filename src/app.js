// Assignme Function base

// import { useRef } from "react";
// export function App()
// {
//     const callRef = useRef();
//     const handleInput = ()=>{
//         callRef.current.value="Ajeet Singh";
//         callRef.current.focus();
//     }

//     return(<>
//      <div>
//         Name: <input type="text" ref={callRef}/>
//         <button type="button" onClick={handleInput}>Fill Name</button>
//      </div>
//     </>)
// }


//Multiple ref

// import React,{Component,createRef} from 'react';
// export class App extends Component
// {
//     constructor()
//     {
//         super();
//         this.inputUserName = createRef();
//         this.inputPassword = createRef();
//     }

//     handleSubmit=(e)=>{
//         e.preventDefault();
//         const username = this.inputUserName.current.value;
//         const password = this.inputPassword.current.value;
//         console.log(username,password);
//     }

//     render() {
//       return (
//         <div>
//           <form onSubmit={this.handleSubmit}>
//             <h1>Login Here</h1>
//             UserName: <input type='text' ref={this.inputUserName}/>

//             Password: <input type='password' ref={this.inputPassword}/>

//             <button type='submit'>Login</button>


//           </form>
//         </div>
//       )
//     }
// }


// Custom Control

import React from 'react';
import Registration from "./forms/Registration";

import "../node_modules/bootstrap/dist/css/bootstrap.css";

export function App() {
  return (
    <div  className='col-md-6' >
      <Registration/>
    </div>
  )
}

