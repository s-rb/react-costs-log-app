import Costs from "./components/Costs/Costs";
import React, {useState} from "react";
import NewCost from "./components/NewCost/NewCost";

const INITIAL_COSTS = [
    {
        id: "123",
        date: new Date(2021, 2, 12),
        description: 'Холодильник',
        price: 999.99
    },
    {
        id: "124",
        date: new Date(2021, 3, 15),
        description: 'Макбук',
        price: 1500
    },
    {
        id: "125",
        date: new Date(2021, 2, 14),
        description: 'Джинсы',
        price: 50
    }
];

// function App() {
const App = () => {

    const [costs, setCosts] = useState(INITIAL_COSTS)

    // можно так создавать - так работает под капотом
    // return React.createElement("div",
    //     {},
    //     React.createElement(
    //         "h1", {}, 'Начнем изучение реакт'),
    //     React.createElement(
    //         Costs, {costs: costs}))

    const addCostHandler = (cost) => {
        console.log(cost)
        console.log('App component')
        // setCosts([cost, ...costs]); // так неправильно, чтобы получать последнее состояние надо через функцию
        setCosts(prevCosts => {
            return [cost, ...prevCosts]
        }); // так неправильно, чтобы получать последнее состояние надо через функцию
    }

    return (
        <div>
            <NewCost onAddCost={addCostHandler}/>
            <Costs costs={costs}/>
        </div>
    );
}

export default App;
