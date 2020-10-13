import React from 'react'; //? Объясняем, что этот файл React компонент

//? Классовый компонент
//? Создаём Button и наследуем его из React компонента / библиотеки
class Button extends React.Component{
    componentDidMount() {
        console.log('Компонент Button отобразился');
    }
    render() {
        console.log(this.props.outline);
        return <button className={`button ${this.props.outline ? 'button--outline' : ''}`}>{this.props.children}</button>;
    }
}

export default Button;