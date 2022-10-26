interface TodoTypes {
  completed: boolean;
}

export const Todo = ({ completed }: TodoTypes) => (
  <li className={completed ? "completed" : ""}>
    <div className="view">
      <input className="toggle" type="checkbox" defaultChecked={completed} />
      <label>Taste JavaScript</label>
      <button className="destroy" />
    </div>

    <input className="edit" defaultValue="Create a TodoMVC template" />
  </li>
);
