import React from 'react'; //? Объясняем, что этот файл React компонент
import classNames from 'classnames';

//? Классовый компонент
//? Создаём Button и наследуем его из React компонента / библиотеки
// class Button extends React.Component{
//     componentDidMount() {
//         console.log('Компонент Button отобразился');
//     }
//     render() {
//         return (
//             <button className={classNames('button', {
//                 'button--outline': this.props.outline,
//                 })}>
//                     {this.props.children}
//             </button>
//         );
//     }
// }

const Button = ({ onClick, className, outline, children }) => {
    return (
        <button
            onClick={onClick}
            className={classNames('button', className, {
            'button--outline': outline,
            })}>
                {children}
        </button>
    );
}

export default Button;