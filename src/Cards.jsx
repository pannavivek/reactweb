import React from 'react';
import Images from './Images';

function Card (props) {

     return (
        <>
        <div className="card-container">
            <div className="cards-list">
                <div className="card">
                    <div className="card_image"><Images imgsrc={props.imgsrc} /></div>
                    <div className="card_title">
                        <h5 className="card-title">{props.ctitle}</h5>
                        <p className="card-text">{props.ctext}</p>
                        <a href={props.links} className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
            </div>
        </>
    );
}
export default Card;