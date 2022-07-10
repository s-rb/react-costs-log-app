import "./CostsList.css";
import CostItem from "./CostItem";

const CostsList = (props) => {
    let costsContent = props.filteredElements.length === 0 && <p>В этом году нет расходов</p>;
    if (props.filteredElements.length > 0) {
        costsContent = props.filteredElements.map(cost => (<CostItem
            key={cost.id}
            date={cost.date}
            description={cost.description}
            amount={cost.price}
        />))
    }

    return (
        // <ul className="cost-list">
        //
        // </ul>
        {costsContent}
    )
}

export default CostsList;