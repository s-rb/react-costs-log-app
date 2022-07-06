import CostItem from "./CostItem";
import "./Costs.css";
import Card from "../UI/Card";

const Costs = (props) => {
    return (
        <Card className='costs'>
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
        </Card>
    );
}

export default Costs;