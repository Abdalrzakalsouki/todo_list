import React, { Component } from 'react'

export class AddTodo extends Component {

   state = {
       title: ''
   }
   submit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title)
        this.setState({title: ''})
   }

   type = (e) => {
       this.setState({[e.target.name]: e.target.value})
   }


    render() {
        return (
           <form onSubmit={this.submit} style={{ display: 'flex' }}>
               <input type="text" name="title" style={{flex: '10', padding: '5px'}} placeholder="Add a new task ..." value={this.state.title} 
               onChange={this.type}/>
               <input type="submit" value="Submit" className="btn" style={{flex:'1'}}/>
           </form>
        )
    }
}

export default AddTodo
