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
                {props.costs.filter(cost => cost.date.getFullYear().toString() === selectedYear).map(cost => (<CostItem
                    key={cost.id}
                    date={cost.date}
                    description={cost.description}
                    amount={cost.price}
                />))}
            </Card>
        </div>
    );
}

export default Costs;