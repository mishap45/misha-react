import React from 'react'
import style from './myWorks.module.css'
import Pizza from '../../assets/img/Projects/pizza.png'
import Weather from '../../assets/img/Projects/weather.png'
import Calculator from '../../assets/img/Projects/calculator.jpg'
import CarSharing from '../../assets/img/Projects/carSharing.jpg'
import Gallery from '../../assets/img/Projects/gallery.jpg'
import PostViewer from '../../assets/img/Projects/postViewer.jpg'
import ShoppingList from '../../assets/img/Projects/shopping.png'
import Millionaire from '../../assets/img/Projects/Millionaire.png'
import StarWars from '../../assets/img/Projects/StarWars.png'
import CardMisha from './CardMisha'

const MyWorks = () => {
    return (
        <div className={style.myWorksBlock}>
            <p className={style.head}>Мої роботи</p>

            <div className={style.myWorks}>
                <CardMisha imgWork={Pizza} titleWork={'any-pizza(React)'}
                           urlWork={'https://mishap45.github.io/any-pizza/#/any-pizza/pizza_on_wood'}/>

                <CardMisha imgWork={Weather} titleWork={'misha-weather-app(React)'}
                           urlWork={'https://mishap45.github.io/weather-app/#/weather-app/search'}/>

                <CardMisha imgWork={Calculator} titleWork={'PrettyCalculator(React Native)'}
                           urlWork={'https://exp.host/@milov/PrettyCalculator'}/>

                <CardMisha imgWork={CarSharing} titleWork={'AE_CarSharing(React Native)'}
                           urlWork={'https://exp.host/@milov/AE_CarSharing'}/>

                <CardMisha imgWork={Gallery} titleWork={'MishaGallery(React Native)'}
                           urlWork={'https://exp.host/@milov/MishaGallery'}/>

                <CardMisha imgWork={PostViewer} titleWork={'MishaPostViewer(React Native)'}
                           urlWork={'https://exp.host/@milov/mishaITCraftTestApp'}/>

                <CardMisha imgWork={ShoppingList} titleWork={'Shopping List(React)'}
                           urlWork={'https://shopping-list-misha.netlify.app'}/>

                <CardMisha imgWork={Millionaire} titleWork={'Who want to be a millionaire?(React)'}
                           urlWork={'https://mishap45.github.io/misha-react-genesis-game/#/misha-react-genesis-game/startPage'}/>

                <CardMisha imgWork={StarWars} titleWork={'Star Wars planet encyclopedia(React)'}
                           urlWork={'https://mishap45.github.io/misha-react-genesis/#/misha-react-genesis/page/1'}/>
            </div>
        </div>
    )
};

export default MyWorks