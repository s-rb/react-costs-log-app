import CostForm from "./CostForm";
import './NewCost.css';

const NewCost = (props) => {

    const saveCostDataHandler = (inputCostData) => {
        props.onAddCost(inputCostData);
    }

    return <div className='new-cost'>
        <CostForm onSaveCostData={saveCostDataHandler}/>
    </div>
}

export default NewCost;