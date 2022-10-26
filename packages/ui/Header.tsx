import { FC } from "react";

export const Header: FC = ({ children }) => (
  <header className="header">
    <h1>todos</h1>
    {children}
  </header>
);
