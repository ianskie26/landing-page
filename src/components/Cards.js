import React from "react";


export default function Cards(props) {
    return (
                <div className="cards">
                    <img src={props.item.coverImg} alt="article thumbnail" className="card--image" />
                    <p className="card--title">{props.item.title}</p>
                    <p className="card--date">{props.item.date}</p>
                </div>
    )
}