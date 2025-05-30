import { useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import styles from './CreateUser.module.css';

const CreateUser = () => {
  const [inputName, setInputName] = useState('');
  const [inputAge, setInputAge] = useState('');

  const createUserHandler = (event) => {
    event.preventDefault();
    console.log('Имя:', inputName);
    console.log('Возраст:', inputAge);

    if(inputName.trim().length === 0){
        return
    }
    if(+inputAge < 1){
        return
    }
   
  };

  props.onCreateUser(inputName, inputAge)

  const nameChangeHandler = (event) => {
    setInputName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setInputAge(event.target.value);
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={createUserHandler}>
        <label htmlFor="name">Имя</label>
        <input
          id="name"
          type="text"
          value={inputName}
          onChange={nameChangeHandler}
        />

        <label htmlFor="age">Возраст</label>
        <input
          id="age"
          type="number"
          onChange={ageChangeHandler}
          value={inputAge} />
        

        
        <Button type="submit">Добавить пользователя</Button>
      </form>
    </Card>
  );
};

export default CreateUser;