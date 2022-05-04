import React from "react";
import style from "./TodoListItem.module.css";
import cn from "classnames";
import { BsExclamationLg, BsTrash } from "react-icons/bs";
import * as PropTypes from "prop-types";

export default class TodoListItem extends React.Component {
  state = {
    done: false,
    important: false,
  };
  onDoneTask = () => {
    this.setState(({ done }) => {
      return { done: !done };
    });
  };
  onImportantTask = () => {
    this.setState(({ important }) => {
      return { important: !important };
    });
  };
  render() {
    const { label, id, onDeleted } = this.props;
    const { done, important } = this.state;
    return (
      <div className={cn(style.TodoListItem)}>
        <span
          className={cn(
            important && style.important,
            done && style.done,
            style.label
          )}
          onClick={this.onDoneTask}
        >
          {label}
        </span>

        <button className={cn(style.btn, "btn")} onClick={this.onImportantTask}>
          <BsExclamationLg />
        </button>
        <button className={cn(style.btn, "btn")} onClick={() => onDeleted(id)}>
          <BsTrash />
        </button>
      </div>
    );
  }
}

TodoListItem.propTypes = {
  label: PropTypes.string,
  important: PropTypes.bool,
};
