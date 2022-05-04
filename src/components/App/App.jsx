import React from "react";
import AppHeader from "../AppHeader/AppHeader";
import SearchPanel from "../SearchPanel/SearchPanel";
import TodoList from "../TodoList/TodoList";
import style from "./App.module.css";
import cn from "classnames";
import ItemAddForm from "../ItemAddForm/ItemAddForm";

class App extends React.Component {
  state = {
    todoData: [
      {
        label: "Drink Coffee",
        important: false,
        id: 1,
      },
      {
        label: "Build React App",
        important: true,
        id: 2,
      },
      {
        label: "Have a lunch",
        important: false,
        id: 3,
      },
    ],
  };
  deleteTask = (id) => {
    this.setState({
      ...this.state,
      todoData: [...this.state.todoData].filter((item) => item.id !== id),
    });
  };
  addTask = (text) => {
    const newId = this.state.todoData.length
      ? this.state.todoData[this.state.todoData.length - 1].id + 1
      : 0;
    this.setState({
      ...this.state,
      todoData: [
        ...this.state.todoData,
        {
          label: text,
          important: false,
          id: newId,
        },
      ],
    });
  };
  render() {
    return (
      <div className={cn(style.App)}>
        <AppHeader toDo={1} done={3} />
        <SearchPanel />
        <ItemAddForm addTask={this.addTask} />
        <TodoList todoData={this.state.todoData} deleteTask={this.deleteTask} />
      </div>
    );
  }
}

export default App;
