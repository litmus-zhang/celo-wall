import React from 'react'

export default function Profile() {
  return (
      <div className='profile'>
          <div className='profile-img'>
              <img src='https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80' alt='profile'/>
          </div>
          <div className='info'>
              <h1>Lukmon Abdulsalam</h1>
              <p>
                  Hi, I am a software developer, who loves to ship product weekly.
                  You got a product idea?
                  Send a message to me.
                  <br/>
                  Lets build something awesome together.
              </p>
          </div>
          <style jsx>
              {`
              .profile {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    margin: 2rem;
                    gap: 2rem;
                    
              }
              .profile-img {
                    width: 200px;
                    height: 200px;
                    border-radius: 50%;
                    border: 4px solid #222;
              }
              .profile-img img {
                    width: 200px;
                    height: 200px;
                    border-radius: 50%;
                    object-fit: cover;
              }
                .info {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                }
                .info h1{
                    margin: 0;

                }
                .info p{
                    margin: 0;
                    fontz-size: 14px;
                }
                @media (min-width: 768px) {
                    .profile {
                        flex-direction: row;
                    }
                    .info {
                        display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    text-align: left;
                    }
                }

              `}
              
          </style>
    </div>
  )
}
