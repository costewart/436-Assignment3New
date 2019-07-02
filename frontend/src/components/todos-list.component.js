import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';
import Delete from './delete';


const Todo = props => (
    <tr>
        <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_description}</td>
        <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_responsible}</td>
        <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_priority}</td>
        <td>
            <button> <Link to={"/edit/"+props.todo._id}>Edit</Link> </button> 
        </td>
        <td><button onClick={() => this.deleteTodo(props.todo._id)}> Delete </button></td>
    </tr>
)

export default class TodosList extends Component {

    constructor(props) {
        super(props);
        this.delete = new Delete();
        this.state = {todos: []};
        this.deleteTodo = this.deleteTodo.bind(this);
    }

    componentDidMount() {
        this.getTodoList();
    }

    getTodoList() {
        axios.get('http://localhost:4000/todos')
            .then(response => {
                this.setState({todos: response.data});
            })
            .catch(function(error) {
                console.log(error);
            })
    }
    
    
    deleteTodo(id) {
        this.delete.deleteTodo(id);
        this.getTodoList();
    }
    
    todoList() {
        return this.state.todos.map(function(currentTodo, i) {
            return <Todo todo={currentTodo} key={i} />;
        });
    }

    render() {
        return (
            <div className="container">
    
                <table className="table  table-hover table-light" style={{ marginTop: 20}}>
                    <thead className="thead">
                        <tr>
                            <th> Dish </th>
                            <th> Chef </th>
                            <th>Course</th>
                            <th> </th>
                            <th> </th>
                        </tr>
                    </thead>
                    <tbody className="tbody">
                        { this.todoList() }
                        
                    </tbody>
                </table>
            </div>
        )
    }
}