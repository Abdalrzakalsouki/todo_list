import React, { Component } from 'react'
import PropTypes from 'prop-types';
export class TodoItems extends Component {

getStyle = () => {
    return {
        background: '#f4f4f4f4',
        padding: '10px',
        borderBottom: '1px #ccc dotted',
        textDecoration: this.props.todos.completed? 'line-through' : 'none'
    }
}


    render() {
        const {id, title} = this.props.todos;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind 
                     (this, id)}/> {' '}
                     {title}
                     <button onClick={this.props.delTodo.bind(this, id)} style={designButton}>X</button>
                </p>
            </div>
        )
    }
}
TodoItems.propTypes = {
    todos: PropTypes.object.isRequired
}
export default TodoItems


const designButton = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius:'50%',
    cursor: 'pointer',
    float: 'right'
}