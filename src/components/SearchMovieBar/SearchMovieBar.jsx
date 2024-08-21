import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import css from "./SearchMovieBar.module.css";

function SearchMovieBar({ onSubmit }) {
  const [value, setValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (value.trim() === "") {
      toast("Enter text to search for movies", {
        icon: "❌",
        style: {
          borderRadius: "5px",
          background: "black",
          color: "white",
        },
      });
    }
    onSubmit(value);
  }

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className={css.wrapper}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={handleInputChange}
          placeholder="Search movies"
          className={css.input}
        />
        <button type="submit" className={css.button}>
          Search
        </button>
        <Toaster position="top-center" reverseOrder={false} />
      </form>
    </div>
  );
}

export default SearchMovieBar;
