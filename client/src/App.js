import { useState } from 'react';
import CreateUser from './components/Users/CreateUser';
import UserList from './components/Users/UserList';

function App() {

  const [userList, setUserList] = useState()

  const CreateUserHandler = (name, age) => {
    setUserList((prevUserList) => {
      return[
        ...prevUserList,
        {
          name: name,
          age: age,
          id: Date.now()
        }
      ]
    })
  }

  return (
    <>
  <CreateUser onCreateUser={CreateUserHandler} /> 
  <UserList users={userList}/>
  </>
  );
}

export default App;
