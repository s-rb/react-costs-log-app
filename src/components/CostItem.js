import './CostItem.css';
import CostDate from "./CostDate";

function CostItem(props) {

    const costDate = props.date;
    const costDescription = props.description;
    const costPrice = props.amount;

    return (
        <div className="cost-item">
            <CostDate date={costDate}></CostDate>
            <div className='cost-item__description'>
                <h2>{costDescription}</h2>
                <div className='cost-item__price'>${costPrice}</div>
            </div>
        </div>);
}

export default CostItem;