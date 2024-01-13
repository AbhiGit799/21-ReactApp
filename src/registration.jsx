// import React from 'react'
// export default function Registration(props) {
//     const { firstName, lastName, age, gender, location, angular, react, node, submitHandler, handleChange } = props;
//     return (
//         <div>
//             <h1>Registration Form</h1>
//             <form className='inputForm' onSubmit={submitHandler} >
//                 <input type='text' className='text' name='firstName' placeholder='Enter First Name' value={firstName} onChange={handleChange} />
//                 <br />
//                 <input type='text' className='text' name='lastName' placeholder='Enter Last Name' value={lastName} onChange={handleChange} />
//                 <br />
//                 <input type='text' className='text' name='age' placeholder='Enter Age' value={age} onChange={handleChange} />
//                 <br />
//                 <input type='radio' className='radiobutton' name='gender' value='male' onChange={handleChange} /> Male
//                 <input type='radio' className='radiobutton' name='gender' value='female' onChange={handleChange} /> Female
//                 <br />
//                 <label className='location-header'>Select Your Location</label>
//                 <br />
//                 <select className='location-input' name='location' value={location} onChange={handleChange} >
//                     <option value="" >--Select--</option>
//                     <option value="UP" >UP</option>
//                     <option value="Delhi" >Delhi</option>
//                     <option value="Panjab" >Panjab</option>
//                 </select>
//                 <br />
//                 <label className='course-titl' >Course : </label>
//                 <br />
//                 <div className='course' >
//                     <input type='checkbox' name='angular' checked={angular} onChange={handleChange} />
//                     <span>Angular</span>
//                     <br />
//                     <input type='checkbox' name='react' checked={react} onChange={handleChange} />
//                     <span>React</span>
//                     <br />
//                     <input type='checkbox' name='node' checked={node} onChange={handleChange} />
//                     <span>Node</span>
//                 </div>
//                 <button type='submit' className='submit' >Register</button>
//             </form>
//             <hr />
//             <div className='entered-info' >
//                 <h2>Entered Info</h2>
//                 <p>Your Name : {firstName} {lastName}</p>
//                 <p>Your Age : {age}</p>
//                 <p>Your Gender : {gender}</p>
//                 <p>Your Location : {location}</p>
//                 <p>Your Courses : </p>
//                 <div className='course' >
//                     <div>Angular : {angular ? 'Yes' : "No"}</div>
//                     <div>React : {react ? 'Yes' : "No"}</div>
//                     <div>Node : {node ? 'Yes' : "No"}</div>
//                 </div>
//             </div>
//         </div>
//     )
// }




import { Component } from "react";
export default class Registration extends Component {
    render() {
        const { firstName, lastName, age, gender, location, angular, react, node, submitHandler, handleChange } = this.props;
        return (
            <div>
                <h1>Registration Form</h1>
                <form className='inputForm' onSubmit={submitHandler} >
                    <input type='text' className='text' name='firstName' placeholder='Enter First Name' value={firstName} onChange={handleChange} />
                    <br />
                    <input type='text' className='text' name='lastName' placeholder='Enter Last Name' value={lastName} onChange={handleChange} />
                    <br />
                    <input type='text' className='text' name='age' placeholder='Enter Age' value={age} onChange={handleChange} />
                    <br />
                    <input type='radio' className='radiobutton' name='gender' value='male' onChange={handleChange} /> Male
                    <input type='radio' className='radiobutton' name='gender' value='female' onChange={handleChange} /> Female
                    <br />
                    <label className='location-header'>Select Your Location</label>
                    <br />
                    <select className='location-input' name='location' value={location} onChange={handleChange} >
                        <option value="" >--Select--</option>
                        <option value="UP" >UP</option>
                        <option value="Delhi" >Delhi</option>
                        <option value="Panjab" >Panjab</option>
                    </select>
                    <br />
                    <label className='course-titl' >Course : </label>
                    <br />
                    <div className='course' >
                        <input type='checkbox' name='angular' checked={angular} onChange={handleChange} />
                        <span>Angular</span>
                        <br />
                        <input type='checkbox' name='react' checked={react} onChange={handleChange} />
                        <span>React</span>
                        <br />
                        <input type='checkbox' name='node' checked={node} onChange={handleChange} />
                        <span>Node</span>
                    </div>
                    <button type='submit' className='submit' >Register</button>
                </form>
                <hr />
                <div className='entered-info' >
                    <h2>Entered Info</h2>
                    <p>Your Name : {firstName} {lastName}</p>
                    <p>Your Age : {age}</p>
                    <p>Your Gender : {gender}</p>
                    <p>Your Location : {location}</p>
                    <p>Your Courses : </p>
                    <div className='course' >
                        <div>Angular : {angular ? 'Yes' : "No"}</div>
                        <div>React : {react ? 'Yes' : "No"}</div>
                        <div>Node : {node ? 'Yes' : "No"}</div>
                    </div>
                </div>
            </div>
        )
    }
}


