import './CostItem.css';
import "../UI/Card.css";
import CostDate from "./CostDate";
import Card from "../UI/Card";
import React, { useState } from "react";

const CostItem = (props) => {

    // Из useState получаем переменную, инициализированную стартовым значением props.description, а также
    // функцию для вызова изменения
    const [description, setDescription] = useState(props.description);

    const changeDescriptionHandler = () => { setDescription('New cost!')};

    const costDate = props.date;
    const costPrice = props.amount;

    return (
        <Card className="cost-item">
            <CostDate date={costDate}></CostDate>
            <div className='cost-item__description'>
                <h2>{description}</h2>
                <div className='cost-item__price'>${costPrice}</div>
            </div>
            <button onClick={changeDescriptionHandler}>Изменить!</button>
        </Card>);
}

export default CostItem;