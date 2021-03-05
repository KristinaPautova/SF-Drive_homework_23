import React, { Fragment } from "react";
import "../styles/App.css";
import womanImg from '../img/questions.svg';

function App () {
        return (
        <Fragment>

      <main>
            <div className="questions__container">
                <img src={womanImg} alt="Woman with questions" />
                <h1>Частые вопросы</h1>
            <div className="question__frame-text">
                <p>Отвечаем на вопросы, которые у вас могут возникнуть.</p>
            </div>

            </div>                
        </main>


        </Fragment>
        );
    }


export default App;