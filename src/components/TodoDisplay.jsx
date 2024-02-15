import React from 'react';

const TodoDisplay = ({ item, index, onEdit, onDelete, onStatusChange }) => {
    const cardBodyStyle = {
        backgroundColor: '#FFF44F', 
        padding: '20px', 
      };
    return (
        <div className='card'>
            <div className='card-body' style={cardBodyStyle}>
                <div className="mb-3">
                    <label className="fw-bold">ID: </label>
                    <span>{item.id}</span>
                </div>
                <div className="mb-3">
                    <label className="fw-bold">Title: </label>
                    <span>{item.title}</span>
                </div>
                <div className="mb-3">
                    <label className="fw-bold">Description: </label>
                    <span>{item.description}</span>
                </div>
                <div className="mb-3">
                    <label className="fw-bold">Status: </label>
                    <select value={item.status} onChange={(e) => onStatusChange(item.id, e.target.value)} style={{ backgroundColor: item.status === 'pending' ? 'red' : 'green' }}>
                        <option value="pending">Pending</option>
                        <option value="completed">Completed</option>
                    </select>
                </div>
                <div className='text-center'>
                    <button className='btn btn-primary me-2' onClick={() => onEdit(item.id)}>Edit</button>
                    <button className='btn btn-danger' onClick={() => onDelete(item.id)}>Delete</button>
                </div>

            </div>
        </div>
    );
};

export default TodoDisplay;
