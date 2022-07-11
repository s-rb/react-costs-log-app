const DiagramBar = (props) => {

    let barFillHeight = '0%'; // для CSS заполненность столбца

    if (props.maxValue > 0) {
        barFillHeight = Math.round(props.value / props.maxValue * 100) + '%';
    }
    /*в style передаем объект со стилем, стиль динамический*/
    return (
        <div className='diagram-bar'>
            <div className='diagram-bar__inner'>
                <div className='diagram-bar__fill' style={{
                    height: barFillHeight
                }}></div>
            </div>
            <div className='diagram-bar__label'>{props.label}</div>
        </div>
    );
};

export default DiagramBar;