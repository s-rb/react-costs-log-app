import CostForm from "./CostForm";
import './NewCost.css';
import {useState} from "react";

const NewCost = (props) => {

    const [isFormVisible, setIsFormVisible] = useState(false)

    const saveCostDataHandler = (inputCostData) => {
        let costData = {...inputCostData, id: Math.random().toString()};
        props.onAddCost(costData);
        setIsFormVisible(false);
    }

    const inputCostDataHandler = () => {
        setIsFormVisible(true);
    }

    const cancelCostHandler = () => {
        setIsFormVisible(false);
    }

    return <div className='new-cost'>
        {!isFormVisible && <button onClick={inputCostDataHandler}>Добавить новый расход</button>}
        {isFormVisible && <CostForm onSaveCostData={saveCostDataHandler} onCancel={cancelCostHandler}/>}
    </div>
}

export default NewCost;