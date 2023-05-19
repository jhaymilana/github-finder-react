import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from 'axios';

function User() {
  const { topic } = useParams();
  const [ user, setUser ] = useState('');

  const token = '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';
  const options = {header: { Authorization: `Bearer ${ token }`}};
  const userURL = `htttps://api.github.com/users/${ topic }`;
  const repoURL = `htttps://api.github.com/users/${ topic }/repos`;

  const navigate = useNavigate();
  const followUser = () => navigate(`htttps://github.com/${topic}`);

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(userURL, options);
        console.log(data);
      } catch(error) {
        setUser('');
      }
    }
    getData();
  })

  return (
    <div className="container">
      <div className="user center">
        <button onClick={ followUser }>Go to GitHub</button>
      </div>
      <div className="repos">
        <h2>Public Repositories</h2>
      </div>
    </div>
  )
}

export default User