import React, {useEffect, useLayoutEffect, useRef, useState} from 'react';
import stl from './popUpSignUp.module.css';
import {useDispatch, useSelector} from "react-redux";
import {changeDataStateAction, saveDataAction} from "../../../../redux/actions/popUpActions";
import {mailFormat, specialCharacters} from "../../../../utils/constants";

const PopUpSignUp = (props) => {
    const [update, setUpdate] = useState(false);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');

    const [validate, setValidate] = useState({
        name: true,
        email: true,
        password1: true,
        password2: true,
        password: true,
    });

    const dispatch = useDispatch();
    const isRequestReady = useSelector(state => state.popUp.requestReady);
    const response = useSelector(state => state.popUp.response);
    const validatePassword = (inputText) => {
        if (inputText.match(mailFormat))
            return false;
        if (inputText.length < 8)
            return false;
        if (!/[A-Z]/.test(inputText))
            return false;
        if (!/[a-z]/.test(inputText))
            return false;
        return !(!/[0-9]/.test(inputText) && !specialCharacters.test(inputText));

    }

    const validateName = (inputText) => inputText.length >= 4;

    const validateEmail = (inputText) => !!inputText.match(mailFormat);

    useEffect(() => {
        let isValidateAllTrue = true;
        if (name.length === 0 || email.length === 0 || password2.length === 0 || password1.length === 0)
            isValidateAllTrue = false;
        else
            for (let field in validate) {
                if (!validate[field]) {

                    isValidateAllTrue = false;
                    break;
                }
            }
        if (isValidateAllTrue) {
            dispatch(saveDataAction({name, email, password: password1}));
        }

        console.log(response);
    });


    return (
        <div className={stl.container}>
            <form>
                <div>
                    <label htmlFor={'name'}>Name:</label>
                    <input type="text" id={'name'} placeholder={'Helen Johnson'}
                           onChange={e => {
                               const value = e.currentTarget.value || '';
                               setValidate(prevState => ({...prevState, name: false}));
                               setName(value);
                               setValidate(prevState => ({...prevState, name: validateName(value)}));
                           }}/>
                    {validate.name ? null : <p>Wrong name</p>}
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="text" id={'email'} placeholder={'helenjohnson@gmail.com'}
                           onChange={e => {
                               const value = e.currentTarget.value || '';
                               setValidate(prevState => ({...prevState, email: false}));
                               setEmail(value);
                               setValidate(prevState => ({...prevState, email: validateEmail(value)}));
                           }}/>
                    {validate.email ? null : <p>Wrong email</p>}
                </div>
                <div>
                    <label htmlFor={'password1'}>Password:</label>
                    <input type="password" id={'password1'} placeholder={'********'}
                           onChange={e => {
                               const value = e.currentTarget.value || '';
                               setValidate(prevState => ({...prevState, password1: false}));
                               setPassword1(value);
                               setValidate(prevState => ({...prevState, password1: validatePassword(value)}));
                               if (value.length !== 0 && password2.length !== 0 && validatePassword(value) && validate.password2 && password2 !== value)
                                   setValidate(prevState => ({...prevState, password: false}));
                               else setValidate(prevState => ({...prevState, password: true}));
                           }}/>
                    {validate.password1 ? null : <p>Wrong password</p>}
                </div>
                <div>
                    <label htmlFor={'password2'}>Password:</label>
                    <input type="password" id={'password2'} placeholder={'********'}
                           onChange={e => {
                               const value = e.currentTarget.value || '';
                               setValidate(prevState => ({...prevState, password2: false}));
                               setPassword2(value);
                               setValidate(prevState => ({...prevState, password2: validatePassword(value)}));
                               if (password1.length !== 0 && value.length !== 0 && validate.password1 && validatePassword(value) && value !== password1)
                                   setValidate(prevState => ({...prevState, password: false}));
                               else setValidate(prevState => ({...prevState, password: true}));
                           }}/>
                    {validate.password ? validate.password2 ? null : <p>Wrong password</p> : <p>Password mismatch</p>}
                </div>
            </form>
            <div className={stl.textContainer}>
                {isRequestReady === null ? null : isRequestReady === true ? 'loading...' : <p>Fill all fields</p>}
                <p>Password must have at least 8 characters with at least one Capital letter, at least one lower case
                    letter and one special character or number.</p>
                <p>Please re-enter your password.</p>
            </div>
        </div>
    );
};

export default PopUpSignUp;