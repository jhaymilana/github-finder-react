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
        const { data } = await axios.get(repoURL, options);
        setRepo(data);
        console.log(data);
      } catch(error) {
        setRepo('');
        console.log(error);
      }
    }
    getRepo();
  }, []);

  // User Info Variables
  const pfp = <figure><img src={ user.avatar_url } alt="Profile" /></figure>;
  const repoNum = <p className='highlight'>{ user.public_repos }</p>;
  const following = <p className='highlight'>{ user.following }</p>;
  const followers = <p className='highlight'>{ user.followers }</p>;

  // Repo Info Variables
  const repoName = <p className='highlight'>{ repo.name }</p>

  return (
    <div className="container">
      <div className='center'>
        <div className="user center">
          { pfp }
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
          {[...new Array([])].map((i, index) => {
            index += 1;
            return (
              <div className='repo'>
                {repoName}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default User