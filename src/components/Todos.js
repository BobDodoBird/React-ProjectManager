import React, { Component } from 'react';
import TodoItem from './TodoItem';

class Todos extends Component {
  render() {
    let todoItems;
    if (this.props.todos) {
      todoItems = this.props.todos.map(todo => {
        //console.log(todo);
        return(
          <TodoItem key={todo.id} todo={todo} />
        );
      });
    }

    console.log(this.props);
    return (
      <div className="Todos">
        <h3>Latest Todos</h3>
        {this.props.test}
        {todoItems}
      </div>
    );
  }
}

// Causes 'undefined' error
// 
// Todos.propTypes = {
//   todos: React.PropTypes.array
// }

export default Todos;
