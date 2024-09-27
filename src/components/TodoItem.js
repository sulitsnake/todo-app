import React, { useState } from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import './styles.css';

const TodoItem = ({ todo, index, setTodos, todos }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text); 


  const handleComplete = () => {
    const updatedTodos = [...todos];
    updatedTodos[index].isComplete = !todo.isComplete; 
    setTodos(updatedTodos);
  };


  const handleRemove = () => {
    setTodos(todos.filter((_, i) => i !== index));
  };


  const handleSave = () => {
    const updatedTodos = [...todos];
    updatedTodos[index].text = editedText; 
    setTodos(updatedTodos);
    setIsEditing(false); 
  };

  return (
    <ListGroup.Item className="d-flex justify-content-between">
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            className="form-control me-2"
          />
          <Button id="savechanges" onClick={handleSave}>
            Save
          </Button>
        </>
      ) : (
        <>
  
          <span className={todo.isComplete ? 'text-decoration-line-through' : ''}>
            {todo.text}
          </span>
          <div>
            <Button 
              id="complete" 
              className="me-2" 
              onClick={handleComplete}
       
            >
              {todo.isComplete ? 'Undo' : 'Complete'}
            </Button>
            <Button 
              id="edit" 
              className="me-2" 
              onClick={() => setIsEditing(true)} 
              disabled={todo.isComplete || isEditing} 
            >
              Edit
            </Button>
            <Button 
              id="remove" 
              onClick={handleRemove}
              disabled={todo.isComplete || isEditing}
            >
              Remove
            </Button>
          </div>
        </>
      )}
    </ListGroup.Item>
  );
};

export default TodoItem;