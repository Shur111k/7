import React from "react";

export class Content extends React.Component{
    constructor(props) {
        super(props);
        this.setRandomColor = this.setRandomColor.bind(this);
    }
    getRandomColor(){
        return '#' + Math.floor(Math.random() * (256)).toString(16) + Math.floor(Math.random() * (256)).toString(16) + Math.floor(Math.random() * (256)).toString(16);
    }
    setRandomColor(element){
        element.target.style.background = this.getRandomColor();
        element.target.style.color = this.getRandomColor();
    }
    render() {
        return <>
            <h2 onClick={this.setRandomColor} >Богоцький Олександр Вячеславович</h2>

            <p onClick={this.setRandomColor}>Дата та місце народження: Народився 23 липня 2003 року у Вінниці</p>
            <p> Освіта: Вінницький технічний ліцей</p>

            <hr />
            <h4>Хобі:</h4>
            <ul type ="square">
                <li>Комп'ютерні ігри</li>
                <li>Прогулянки</li>
                <li>Катання на велосипеді</li>
            </ul>

            <h4>Улюблені фільми:</h4>
            <ol>
                <li>"Кунг-Фу Панда"</li>
                <li>"Бійцівський клуб"</li>
                <li>"Перл Харбор"</li>
            </ol>

            <h4>Берлін</h4>
            <p>
               Берлі́н (нім. Berlin) — столиця Федеративної Республіки Німеччина, окрема федеральна земля.
    		Населення — 3,64 млн осіб, найбільше місто країни, найбільше місто ЄС.
    		Неодноразово був головним містом німецьких державних утворень
    		З часу возз'єднання Німеччини в 1990 році — загальнонімецька столиця.
    		Важливий політичний, інформаційний, культурний та науковий центр Європи.
    		Великий транспортний вузол, одне з найвідвідуваніших міст континенту.
    		Численні університети, дослідницькі лабораторії, театри й музеї заслужили міжнародне визнання.
    		Місто — важливий осередок діячів мистецтва з усього світу.
            </p>
        </>
    }
}