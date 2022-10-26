import { FC } from "react";

export const TodoList: FC = ({ children }) => (
  <ul className="todo-list">{children}</ul>
);
