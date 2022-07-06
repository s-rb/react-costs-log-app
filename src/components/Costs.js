import CostItem from "./CostItem";
import "./Costs.css";

function Costs(props) {
    return (
        <div className='costs'>
            <CostItem
                date={props.costs[0].date}
                description={props.costs[0].description}
                amount={props.costs[0].price}
            />
            <CostItem
                date={props.costs[1].date}
                description={props.costs[1].description}
                amount={props.costs[1].price}
            />
            <CostItem
                date={props.costs[2].date}
                description={props.costs[2].description}
                amount={props.costs[2].price}
            />
        </div>
    );
}

export default Costs;