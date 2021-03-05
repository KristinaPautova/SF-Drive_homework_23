import React, { Fragment } from "react";
import "../styles/App.css";
import womanImg from '../img/question.svg';
import Footer from './Footer';
import Header from './Header';
import CollapsibleBlockAll from "./CollapsibleBlockAll"

function App () {
        return (
        <Fragment>
      <Header/>
      <main>
            <div className="questions__container">
                <img src={womanImg} alt="Woman with questions" />
                <h1>Частые вопросы</h1>
            <div className="question__frame-text">
                <p>Отвечаем на вопросы, которые у вас могут возникнуть.</p>
            </div>
            <CollapsibleBlockAll/>


            </div>                
        </main>

        <Footer />
        </Fragment>
        );
    }


export default App;