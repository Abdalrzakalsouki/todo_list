import React, {Component} from 'react';
import TodoItems from './TodoItems';
import PropTypes from 'prop-types';
class Todo extends Component {



    render(){
        return this.props.todo.map((todos) => (
             <TodoItems key={todos.id} todos={todos} markComplete = {this.props.markComplete} delTodo={this.props.delTodo}/>
        ));
}
}
Todo.propTypes = {
    todo: PropTypes.array.isRequired
}

export default Todo;
