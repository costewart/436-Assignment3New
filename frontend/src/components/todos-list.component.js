import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

const Todo = props => (
    <tr>
          <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_description}</td>
        <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_responsible}</td>
        <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_priority}</td>
        <td>
            <Link to={"/edit/"+props.todo._id}>Edit</Link> 
        </td>
    </tr>
)

export default class TodosList extends Component {

    constructor(props) {
        super(props);
        this.state = {todos: []};
    }

    componentDidMount() {
        axios.get('http://localhost:4000/todos')
            .then(response => {
                this.setState({todos: response.data});
            })
            .catch(function(error) {
                console.log(error);
            })
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
                            <th> Chef </th>
                            <th> Dish </th>
                            <th>Course</th>
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