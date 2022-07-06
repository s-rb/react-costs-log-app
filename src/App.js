import Costs from "./components/Costs";

function App() {
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

    return (
        <div>
            <h1>
                Начнем изучение реакт
            </h1>
            <Costs costs={costs}/>
        </div>
    );
}

export default App;
