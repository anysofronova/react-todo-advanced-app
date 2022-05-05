import React from "react";
import AppHeader from "../AppHeader/AppHeader";
import SearchPanel from "../SearchPanel/SearchPanel";
import TodoList from "../TodoList/TodoList";
import style from "./App.module.css";
import cn from "classnames";
import ItemAddForm from "../ItemAddForm/ItemAddForm";
let maxId = 0;
class App extends React.Component {
  state = {
    todoData: [
      this.createTodoItem("Drink Coffee"),
      this.createTodoItem("Build React App"),
      this.createTodoItem("Have a lunch"),
    ],
    term: "",
    filter: "",
  };
  createTodoItem(label) {
    return {
      label: label,
      important: false,
      id: maxId++,
      done: false,
    };
  }
  toggleProperty(arr, id, property) {
    return arr.map((item) =>
      item.id === id ? { ...item, [property]: !item[property] } : item
    );
  }
  deleteTask = (id) => {
    this.setState({
      ...this.state,
      todoData: [...this.state.todoData].filter((item) => item.id !== id),
    });
  };
  addTask = (text) => {
    this.setState({
      ...this.state,
      todoData: [...this.state.todoData, this.createTodoItem(text)],
    });
  };
  toggleImportant = (id) => {
    this.setState(({ todoData }) => {
      return { todoData: this.toggleProperty(todoData, id, "important") };
    });
  };
  toggleDone = (id) => {
    this.setState(({ todoData }) => {
      return { todoData: this.toggleProperty(todoData, id, "done") };
    });
  };
  onSearchTask = (text) => {
    this.setState({ term: text });
  };
  searchTask = (items, term) => {
    if (!term.length) return items;
    return items.filter(
      (i) => i.label.toLowerCase().indexOf(term.toLowerCase()) > -1
    );
  };
  onFilterTask = (option) => {
    this.setState({ filter: option });
  };
  filterTask = (items, option) => {
    switch (option) {
      case "All":
        return items;
      case "Active":
        return items.filter((i) => !i.done);
      case "Done":
        return items.filter((i) => i.done);
      default:
        return items;
    }
  };

  render() {
    const { todoData, term, filter } = this.state;
    const visibleItems = this.filterTask(
      this.searchTask(todoData, term),
      filter
    );
    const doneCount = todoData.filter((i) => i.done).length;
    const todoCount = todoData.length - doneCount;
    return (
      <div className={cn(style.App)}>
        <AppHeader toDo={todoCount} done={doneCount} />
        <SearchPanel
          searchTask={this.onSearchTask}
          filterTask={this.onFilterTask}
          filter={filter}
        />
        <ItemAddForm addTask={this.addTask} />
        <TodoList
          todoData={visibleItems}
          deleteTask={this.deleteTask}
          toggleImportant={this.toggleImportant}
          toggleDone={this.toggleDone}
        />
      </div>
    );
  }
}

export default App;
