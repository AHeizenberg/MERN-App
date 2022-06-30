import { useDispatch } from "react-redux";
import { deleteGoal } from "../features/goals/goalSlice";
import { MdEdit } from "react-icons/md";
import { useState } from "react";
import { updateGoal } from "../features/goals/goalSlice";

function GoalItem({ goal }) {
  const dispatch = useDispatch();

  const [edit, setEdit] = useState(false);
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(text);
    dispatch(updateGoal({ goalId: goal._id, goalData: text }));
    setText("");
  };

  return (
    <div className="goal">
      <div>{new Date(goal.createdAt).toLocaleString("en-US")}</div>
      <h2 style={{ display: edit ? "none" : "block" }}>{goal.text}</h2>

      <form onSubmit={onSubmit} style={{ display: edit ? "block" : "none" }}>
        <div className="form-group">
          <input
            type="text"
            name="text"
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form-group">
          <button className="btn btn-block" type="submit">
            Update Goal
          </button>
        </div>
      </form>

      <button onClick={() => dispatch(deleteGoal(goal._id))} className="close">
        X
      </button>
      <button className="edit" onClick={() => setEdit((prev) => !prev)}>
        <MdEdit />
      </button>
    </div>
  );
}

export default GoalItem;

// {() => dispatch(deleteGoal(goal._id))}
