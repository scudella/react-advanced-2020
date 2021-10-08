import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);

  // we need a promise, but useEffect can not have a
  // promise because of the cleanup function

  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users);
    // console.log(users);
  };
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <h2>fetch data</h2>
      <h3>github users</h3>
      <ul className='users'>
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;

          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href={html_url}>profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default UseEffectFetchData;
