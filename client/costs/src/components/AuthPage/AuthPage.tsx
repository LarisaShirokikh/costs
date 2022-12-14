
import './styles.css';
import {Link} from "react-router-dom";

export const AuthPage = ({type}: { type: 'login' | 'registration' }) => {
    const currentAuthTitle = type === 'login' ? 'Войти' : 'Регистрация';
    return (
        <div className='container'>
            <h1>{currentAuthTitle}</h1>
            <form className='form-group'>
                <label className='auth-label'>
                    Введите имя
                    <input type='text' className='form-control'/>
                </label>
                <label className='auth-label'>
                    Введите пароль
                    <input type='text' className='form-control'/>
                </label>
                <button className='btn btn-primary auth-btn'>{currentAuthTitle}</button>
            </form>
            {type === 'login'
                ? <div>
                    <span className='question_text'>Еще нет аккаунта?</span>
                    <Link to={'/registration'}>Зарегистрироваться</Link>
                </div>
                : <div>
                    <span className='question_text'>Уже есть аккаунт?</span>
                    <Link to={'/login'}>Войти</Link>
                </div>
            }
        </div>
    )
}