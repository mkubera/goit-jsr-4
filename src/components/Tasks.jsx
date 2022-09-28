import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { createSelector } from "@reduxjs/toolkit";
import { selectTasks, selectTasksFilter } from "../redux/selects";

const selectCompletedTasks = createSelector(
  // selects, ktore zwracaja dane
  // selectTasks zwraca tasks (Array of Tasks)
  // selectTasksFilter zwraca filter (String)
  [selectTasks, selectTasksFilter],
  // parametry cb fn (ponizej) to dane z selectTasks i selectTasksFilter
  (tasks, tasksFilter) => {
    switch (tasksFilter) {
      case "all":
        return tasks;
      case "completed":
        return tasks.filter(({ completed }) => completed);
      case "incomplete":
        return tasks.filter(({ completed }) => !completed);
      default:
        return tasks;
    }
  }
);

const Tasks = () => {
  const completedTasks = useSelector(selectCompletedTasks);

  console.log(completedTasks);

  return (
    <div>
      <h3>Tasks</h3>
      <ul>
        {completedTasks.map(({ id, text }) => (
          <li key={id}>{text}</li>
        ))}
      </ul>
    </div>
  );
};

Tasks.propTypes = {};

export default Tasks;
