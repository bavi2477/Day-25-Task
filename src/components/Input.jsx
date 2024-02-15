import React, { useEffect, useState } from 'react';

const Input = ({ addTodo, editingTodo, updateTodo }) => {
    const [title, setTitle] = useState(editingTodo ? editingTodo.title : '');
    const [description, setDescription] = useState(editingTodo ? editingTodo.description : '');

    useEffect(() => {
        if (editingTodo) {
            setTitle(editingTodo.title);
            setDescription(editingTodo.description);
        } else {
            setTitle('');
            setDescription('');
        }
    }, [editingTodo]);

    const handleAddClick = () => {
        if (title.trim() === '' || description.trim() === '') {
          alert('Title and Description cannot be empty');
        } else {
          if (editingTodo) {
            updateTodo(editingTodo.id, title, description);
          } else {
            addTodo(title, description);
          }
          setTitle('');
          setDescription('');
        }
      };

    return (
        <div className='container'>
            <div className="row mt-4 ">
                <div className="col-md-4 d-flex align-items-center ">
                    <label htmlFor="title" style={{ marginRight: '10px' }}>Title:</label>
                    <input id="title" type="text" className='form-control' placeholder='Todo-Title' value={title} onChange={e => setTitle(e.target.value)} />
                </div>
                <div className="col-md-4 d-flex align-items-center " >
                    <label htmlFor="description" style={{ marginRight: '10px' }}>Description:</label>
                    <input id="description" type="text" className='form-control' placeholder='Todo-description' value={description} onChange={e => setDescription(e.target.value)} />
                </div>
                <div className="col-md-4">
                    <button type='button' className='btn btn-primary' onClick={handleAddClick}>Add</button>
                </div>
            </div>
        </div>
    );
};

export default Input;