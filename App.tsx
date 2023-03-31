import * as React from 'react';
import './style.css';

export default function App() {
  return (
    <div>
      <Form />
    </div>
  )
}

const Form = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  }  

  // const showDetails = (
  //   <p>Your email is {email} and your password is {password}</p>
  // );

  const ShowDetails = ({em, pass}) => {

    return(
      <p>Your email is {em} and your password is {pass}</p>
    )
  };


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='p-1'>
            <label>Email</label>
            <input type='text' placeholder='email' value={email} 
            onChange={(event) => setEmail(event.target.value)}/>
          </div>
          <div className='p-1'>
            <label>Password</label>
            <input type='password' placeholder='password' value={password}
            onChange={(event) => setPassword(event.target.value)} />
          </div>
        <div className='p-1'>
          <button type='submit'>Login</button>
          </div>
        </form>
        {/* {showDetails} */}
        <ShowDetails em={email} pass={password}/>
      </div>
    );
}