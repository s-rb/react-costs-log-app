import './CostItem.css';
import "../UI/Card.css";
import CostDate from "./CostDate";
import Card from "../UI/Card";

function CostItem(props) {

    const costDate = props.date;
    const costDescription = props.description;
    const costPrice = props.amount;

    return (
        <Card className="cost-item">
            <CostDate date={costDate}></CostDate>
            <div className='cost-item__description'>
                <h2>{costDescription}</h2>
                <div className='cost-item__price'>${costPrice}</div>
            </div>
        </Card>);
}

export default CostItem;