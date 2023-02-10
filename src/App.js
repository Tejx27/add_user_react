import React,{useState} from 'react';
import AddUser from "./Components/Users/AddUser";
import UserList from './Components/Users/UsersList';

function App() {
  const [usersList,setUsersList] =  useState([]);

  const addUserHandler = (usrName,usrAge) =>{
      setUsersList((prevUserList) => {
        return [...prevUserList,{name:usrName,age:usrAge,id: Math.random.toString()}];
      });
  }
  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      <UserList users={usersList}/>
    </div>
  );
}

export default App;
