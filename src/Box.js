import React from 'react';
import './box.css';
export default function box(props) {
  return (
    <>
      {props.userData.map((user, index) => {
        return (
          <div className="main">
            <div className='box'>
              <img src={user.avatar} alt='' className='boximg' />
              <div className='info'>
                <h3 className="name">
                  {user.first_name} {user.last_name}
                </h3>
                <p className="mail">{user.email}</p>
                <button className='detail'>For Details</button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}