import CostItem from "./CostItem";
import "./Costs.css";
import Card from "../UI/Card";
import CostFilter from "./CostFilter";
import {useState} from "react";

const Costs = (props) => {

    const [selectedYear, setSelectedYear] = useState('2021')

    const changeYearHandler = (year) => {
        setSelectedYear(year);
    }

    return (
        <div>
            <Card className='costs'>
                <CostFilter onChangeYear={changeYearHandler} year={selectedYear}/>
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
        </div>
    );
}

export default Costs;