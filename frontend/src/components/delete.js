import React from 'react';
import axios from 'axios';

class Delete extends React.Component {

    delete(id) {
        axios.get('http://localhost:4000/todos/deleteTodo/' + id)
            .then(function (response) {
            });
    }
}

export default Delete;

