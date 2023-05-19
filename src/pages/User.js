import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from 'axios';

function User() {
  const { topic } = useParams();
  const [ user, setUser ] = useState('');
  const [ repo, setRepo ] = useState('');

  const token = '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';
  const options = {header: { Authorization: `Bearer ${ token }`}};
  const userURL = `https://api.github.com/users/${ topic }`;
  const repoURL = `https://api.github.com/users/${ topic }/repos`;

  // Redirect Button
  const followUser = () => {
    window.location.href = `htttps://github.com/`;
  }

  // Fetch User
  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(userURL, options);
        setUser(data);
        console.log(data);
      } catch(error) {
        setUser('');
        console.log(error);
      }
    }
    getData();
  }, []);

  // Fetch Repos
  useEffect(() => {
    const getRepo = async () => {
      try {
        const response = await axios.get(repoURL, options);
        setRepo(response);
        console.log(response);
      } catch(error) {
        setRepo('');
        console.log(error);
      }
    }
    getRepo();
  }, []);

  // User Info Variables
  const pfp = <figure><img src={ user.avatar_url } alt="Profile" /></figure>;
  const fullName = <p className='full-name'>{ user.name }</p>
  const userName = <p className='user-name'>@{ user.login }</p>
  const repoNum = <p className='highlight'>{ user.public_repos }</p>;
  const following = <p className='highlight'>{ user.following }</p>;
  const followers = <p className='highlight'>{ user.followers }</p>;

  // Repo Info Variables
  // fetch is returning data but mapping the array is not working
  const mapRepo = [{repo}].map((object) => {
    return (
      <div className='repo' key={object.data}>
        <div className='left'>
          <h3 className='highlight'>repo-name</h3>
          <p>Description of the repo.</p>
        </div>
        <div className='right'>
          <p className='date'>May 19, 2023</p>
        </div>
      </div>
    )
  })

  return (
    <div className="container">
      <div className='center'>
        <div className="user center">
          { pfp }
          <div className='name'>
              { fullName }
              { userName }
            </div>
          <div className='user-info'>
            <div className='info center'>
              {repoNum}
              <p>Repos</p>
            </div>
            <div className='info center'>
              { following }
              <p>Following</p>
            </div>
            <div className='info center'>
              { followers }
            <p>Followers</p>
            </div>
          </div>
          <button onClick={ followUser } className='followbtn'>
            Go to GitHub
          </button>
        </div>
      </div>
      <div>
        <h2>Public Repositories</h2>
        <div className='repos'>
          {mapRepo}
        </div>
      </div>
    </div>
  )
}

export default User