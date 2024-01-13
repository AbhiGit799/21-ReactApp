
import React, { Component } from 'react'
import Button from '../Components/Button'
import Input from '../Components/Input';
import Textarea from '../Components/Textarea';
import Select from '../Components/Select';
import Checkbox from '../Components/Checkbox';

export default class Registration extends Component {
    constructor() {
        super();
        this.state = {
            newUser: {
                name: '',
                age: '',
                gender: '',
                skills: [],
                about: ''
            },
            genderOptions: ['male', 'female', 'others'],
            skillOptions: ['Programing', 'Development', "Designing", 'Testing']
        }
    }
    handleInput = (e) => {
        const { name, value } = e.target;
        this.setState(state => ({
            newUser: {
                ...state.newUser,
                [name]: value
            }
        }));
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.newUser);
    }
    handleCancelForm = () => {
        this.state = {
            newUser: {
                name: '',
                age: '',
                gender: '',
                skills: [],
                about: ''
            },
            genderOptions: ['male', 'female', 'others'],
            skillOptions: ['Programing', 'Development', "Designing", 'Testing']
        }
    }
    render() {
        return (
            <div>
                <form className='container-fluid' onSubmit={this.handleSubmit} >
                    <Input
                        title="Full Name"
                        name="name"
                        inputType="text"
                        placeholder="Enter Full Name"
                        value={this.state.newUser.name}
                        action={this.handleInput}
                    />
                    
                    <br/>

                    <Input
                        title="Age"
                        name="age"
                        inputType="number"
                        placeholder="Enter Age"
                        value={this.state.newUser.age}
                        action={this.handleInput}
                    />
                    
                    <br/>

                    <Select
                      title="Gender"
                      name="gender"
                      placeholder="--Select Gender--"
                      value={this.state.newUser.gender}
                      action={this.handleInput}
                      options={this.state.genderOptions}
                    />
                    
                    <br/>

                    <Checkbox 
                     title="Skills"
                     name="skills"
                     action={this.handleInput}
                     options={this.state.skillOptions}
                     selectedOptions={this.state.newUser.skills}
                    />
                    
                    <br/>

                    <Textarea
                      title="About You"
                      name="about"
                      placeholder="Write about you"
                      value={this.state.newUser.about}
                      action={this.handleInput}
                      rows={8}
                      cols={10}
                    />

                    <br/>
                    
                    <Button
                        btnType="submit"
                        type="primary"
                        title="Register"
                    />
                    <Button
                        btnType="button"
                        type="dander"
                        title="Cancel"
                        action={this.handleCancelForm}
                    />
                </form>
            </div>
        )
    }
}
