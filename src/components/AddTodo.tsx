import React, { useState } from 'react';

import { IItem } from '../types/todo';

interface IProps {
  onAddTodo: (todo: IItem) => void;
}

type OnlyTitle = Pick<IItem, 'title'>

const AddTodo: React.FC<IProps> = (props) => {

  const [todo, titleTodo] = useState<Partial<OnlyTitle>>({});
  
  function titleHandler (e: React.ChangeEvent<HTMLInputElement>) {
    titleTodo({
      title: e.target.value,
    });
  }

  function submitHandler (e: React.FormEvent) {
    e.preventDefault();
    if (!todo.title) {
      return;
    }

    props.onAddTodo(todo as IItem);
  }

  return (
    <form onSubmit={submitHandler}>
      <div>
        <span>Add title</span>
        <input type="text" id="add-todo" onChange={titleHandler} />
      </div>
      <button type="submit">Add todo</button>
    </form>
  );
}

export default AddTodo;