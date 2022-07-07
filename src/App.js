import Costs from "./components/Costs/Costs";
import React from "react";
import NewCost from "./components/NewCost/NewCost";

// function App() {
const App = () => {
    const costs = [
        {
            date: new Date(2021, 2, 12),
            description: 'Холодильник',
            price: 999.99
        },
        {
            date: new Date(2021, 3, 15),
            description: 'Макбук',
            price: 1500
        },
        {
            date: new Date(2021, 2, 14),
            description: 'Джинсы',
            price: 50
        }
    ];

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
    }

    return (
        <div>
            <NewCost onAddCost={addCostHandler}/>
            <Costs costs={costs}/>
        </div>
    );
}

export default App;
