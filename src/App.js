import React,{Component} from 'react'; 
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './Components/layout/Header';
import './App.css';
import Todo from './Components/Todo';
import AddTodo from './Components/AddTodo';
//import {v4 as uuid} from 'uuid';
import About from './Components/Pages/About';
import axios from 'axios';
class App extends Component {

  state = {
    todo: []
  }

 componentDidMount(){
   axios.get('https://jsonplaceholder.typicode.com/todos').then(res => this.setState({todo: res.data}))
 }
     

  markComplete = (id) => {
    this.setState({todo: this.state.todo.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
    })})
  }

  delTodo = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res => this.setState({ todo: [...this.state.todo.filter(todo => todo.id !==id)]}));
  }

 addTodo = (title) => {
        axios.post('https://jsonplaceholder.typicode.com/todos', {
          title,
          completed: false
        })
        .then(res => this.setState({todo: [...this.state.todo, res.data]}));
 }

  render(){
    return (
      <Router>

      <div className="App">
           <Header/>
           <Route exact path="/" render={props =>(
             <React.Fragment>
             <AddTodo addTodo={this.addTodo}/>
             <Todo todo={this.state.todo} markComplete={this.markComplete} delTodo={this.delTodo}/>
             </React.Fragment>
           )}/>
           <Route path="/about" component={About} />
      </div>
      </Router>
    );
  }
 
}

export default App;
