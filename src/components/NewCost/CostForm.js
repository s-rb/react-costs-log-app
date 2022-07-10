import './CostForm.css';
import React, {useState} from "react";

const CostForm = (props) => {

    /* Один стейт на все
    const [userInput, setUserInput] = useState({
        name: '',
        amount: '',
        date: ''
    })

    const titleChangeHandler = (event) => {
        setUserInput({
            ...userInput, // Извлекаем все пары ключей-значений и помещаем в новый объект
            name: event.target.value // заменяем в новом объекта один параметр
        })
    }

    const amountChangeHandler = (event) => {
        setUserInput({
            ...userInput,
            amount: event.target.value
        })
    }

    const dateChangeHandler = (event) => {
        setUserInput({
            ...userInput,
            date: event.target.value
        })
    }*/

    const [inputName, setInputName] = useState('');
    const [inputAmount, setInputAmount] = useState('');
    const [inputDate, setInputDate] = useState('');

    // event событие которое происходит
    const titleChangeHandler = (event) => {
        setInputName(event.target.value)
    }

    const amountChangeHandler = (event) => {
        setInputAmount(event.target.value)
    }

    const dateChangeHandler = (event) => {
        setInputDate(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault(); // Предотвратить обновление страницы после сабмита формы

        const costData = {
            description: inputName,
            price: inputAmount,
            date: new Date(inputDate),
        }

        // console.log(costData)
        props.onSaveCostData(costData);
        setInputName('');
        setInputAmount('')
        setInputDate('')
    }

    return <form onSubmit={submitHandler}>
        <div className='new-cost__controls'>
            <div className='new-cost__control'>
                <label>Название</label>
                <input type='text' onChange={titleChangeHandler} value={inputName}/>
            </div>
            <div className='new-cost__control'>
                <label>Сумма</label>
                <input onChange={amountChangeHandler} type='number' min='0.01' step='0.01' value={inputAmount}/>
            </div>
            <div className='new-cost__control'>
                <label>Дата</label>
                <input onChange={dateChangeHandler} type='date' min='2019-01-01' max='2022-12-31' value={inputDate}/>
            </div>
            <div className='new-cost__actions'>
                <button type='submit'>Добавить расход</button>
            </div>
        </div>
    </form>
}

export default CostForm;