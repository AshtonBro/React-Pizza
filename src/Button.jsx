import React from 'react'; //? Объясняем, что этот файл React компонент

//? Классовый компонент
//? Создаём Button и наследуем его из React компонента / библиотеки
class Button extends React.Component{
    componentDidMount() {
        console.log('Компонент Button отобразился');
    }
    render() {
        return <button>Привет</button>;
    }
}

export default Button;