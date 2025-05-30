import Card from '../UI/Card';
import styles from './UserList.module.css';

const UserList = (props) => {

    // const number = [
    //     { name: 'Alex', age: 15 },
    //     {name: 'Max', age: 25}
    // ]
    // const res = number.map((el) => `Я ${el.name}, мне ${el.age} лет`)

    // console.log(res)

    return (
        <Card className={styles.users}>
            <ul>
                {props.user.map((user) => {
                    <li>{user.name} - {user.age} лет</li>
                })}
            </ul>
        </Card>
    )
}

export default UserList;