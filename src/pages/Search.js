import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Search() {
  const navigate = useNavigate();
  const handleClick = () => {
    if (inputValue.length > 1) {
      navigate(`/user/${ inputValue }`);
    }
  }

  const [inputValue, setInputValue] = useState('');

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  return (
    <>
      <div className="search center container">
        <h1>GitHub Finder</h1>
        <div className="inputs">
          <form>
            <input
              type="text"
              placeholder="GitHub User Name"
              value={ inputValue } 
              onChange={ handleInputChange }
            />
            <button onClick={ handleClick }>Search</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Search