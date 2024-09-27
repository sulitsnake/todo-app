import React, { useState } from 'react';
import TodoItem from './TodoItem';
import { Container, Row, Col, Button, Form, ListGroup } from 'react-bootstrap';
import './styles.css'; 
const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { text: newTodo, isComplete: false, isEditing: false }]);
      setNewTodo("");
    }
  };

  return (
    <>
     
      <header className="gif-header">
        <h1 className="header-title">Tasks to do</h1>
      </header>

     
      <div className="todo-section"> 
        <Container className="todo-container mt-5"> 
          <Row>
            <Col>
              <Form className="d-flex justify-content-center mb-4">
                <Form.Control
                  type="text"
                  value={newTodo}
                  onChange={(e) => setNewTodo(e.target.value)}
                  placeholder="Enter a new todo"
                  className="me-2"
                />
                <Button id="addtask" onClick={handleAddTodo}>Add task</Button>
              </Form>
              {todos.length === 0 ? (
                <p className="text-center">No todos available. Add a todo to get started!</p>
              ) : (
                <ListGroup>
                  {todos.map((todo, index) => (
                    <TodoItem
                      key={index}
                      index={index}
                      todo={todo}
                      setTodos={setTodos}
                      todos={todos}
                    />
                  ))}
                </ListGroup>
              )}
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default TodoApp;