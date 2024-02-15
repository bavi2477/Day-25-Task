import React, { useState, useEffect } from 'react';
import Input from './components/Input';
import TodoDisplay from './components/TodoDisplay';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [editingTodo, setEditingTodo] = useState(null);
  const [statusFilter, setStatusFilter] = useState('all');

  const addTodo = (newTitle, newDescription) => {
    let newData = {
      id: todos.length + 1,
      title: newTitle,
      description: newDescription,
      status: 'pending',
    }
    setTodos(pval => [...pval, newData])
  };

  const updateTodo = (id, updatedTitle, updatedDescription) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, title: updatedTitle, description: updatedDescription } : todo)));
    setEditingTodo(null);
  };

  const onDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const onEdit = (id) => {
    const todo = todos.find((todo) => todo.id === id);
    setEditingTodo(todo);
  }

  const onStatusChange = (id, newStatus) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, status: newStatus } : todo)));
  };

  const filteredTodos = todos.filter((todo) => statusFilter === 'all' || todo.status === statusFilter);

  return (
    <div className='container'>
      <h1 className='text-center text-success mt-5 mb-5'>Bavi's Todo</h1>
      <Input addTodo={addTodo} editingTodo={editingTodo} updateTodo={updateTodo} />
      <h3 className='text-success mt-5 mb-5'>My Todo's:</h3>
      <div>
        <label>Status Filter:</label>
        <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
          <option value="all">All</option>
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </select>
      </div>

      <div className="row">
        {filteredTodos.map((item, index) => (
          <div key={item.id} className="col-md-4 mb-4 mt-4">
            <TodoDisplay item={item} index={index} onStatusChange={onStatusChange} onEdit={onEdit} onDelete={onDelete} />
          </div>
        ))}
      </div>

    </div>
  );
};

export default App;