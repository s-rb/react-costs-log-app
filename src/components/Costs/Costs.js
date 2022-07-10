import "./Costs.css";
import Card from "../UI/Card";
import CostFilter from "./CostFilter";
import {useState} from "react";
import CostsList from "./CostsList";

const Costs = (props) => {

    const [selectedYear, setSelectedYear] = useState('2021')

    const changeYearHandler = (year) => {
        setSelectedYear(year);
    }

    const filteredElements = props.costs.filter(cost => cost.date.getFullYear().toString() === selectedYear);

    return (
        <div>
            <Card className='costs'>
                <CostFilter onChangeYear={changeYearHandler} year={selectedYear}/>
                <CostsList filteredElements={filteredElements}/>
            </Card>
        </div>
    );
}

export default Costs;