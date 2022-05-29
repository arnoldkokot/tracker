import "./NameForm.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { change } from "../redux/summonerName";
export default function NameForm() {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  function handleChange(event) {
    setInput(event.target.value);
  }

  function handleSubmit(event) {
    dispatch(change(input));
    event.preventDefault();
  }

  return (
    <form className="search-box" onSubmit={handleSubmit}>
      <button type="submit">
        <span className="material-icons">search</span>
      </button>
      <input
        type="text"
        placeholder="Search summoner name"
        required
        value={input}
        onChange={handleChange}
      />
    </form>
  );
}
