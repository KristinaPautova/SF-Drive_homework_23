import React, { Fragment } from 'react';


const CollapsibleBlockAll = () => (
    <Fragment>
 <section class="asked_questions__frame">
        <div class="team__frame-wrapper">
            <div class="team__frame-wrapper-item is-animated">
                <button type="button" class="collapsible">Могу ли я отменить бронь?
                    <a href='' target='_blank' class="link">
                        <img src="src/img/down.svg"/>
                    </a>
                </button>
            </div>
            <div class="team__frame-wrapper-item is-animated">
                <button type="button" class="collapsible">Могу ли я вернуть деньги, если не подошёл автомобиль?
                    <a href='' target='_blank' class="link">
                        <img src="src/img/down.svg"/>
                    </a>
                </button>
            </div>
            <div class="team__frame-wrapper-item is-animated">
                <button type="button" class="collapsible">Что делать, если случилось ДТП?
                    <a href='' target='_blank' class="link">
                        <img src="src/img/down.svg"/>
                    </a>
                </button>
            </div>
            <div class="team__frame-wrapper-item is-animated is-active">
                <button type="button" class="collapsible">Могу ли я оставить автомобиль в удобном для меня месте?
                    <a href='' target='_blank' class="link">
                        <img src="src/img/top.svg"/>
                    </a>
                </button>
            </div>
            <div  class="team__frame-wrapper-item-answer ">
                <p>Данный вопрос обсуждается с собственником,
                     но как правило автомобиль нужно вернуть туда, где вы его получили.</p>
            </div>
            <div class="team__frame-wrapper-item is-animated">
                <button type="button" class="collapsible">Что делать, если собственник просит заплатить ему напрямую?
                    <a href='' target='_blank' class="link">
                        <img src="src/img/down.svg"/>
                    </a>
                </button>
            </div>
            <div class="team__frame-wrapper-item is-animated">
                <button type="button" class="collapsible">Должен ли я заправлять автомобиль?
                    <a href='' target='_blank' class="link">
                        <img src="src/img/down.svg"/>
                    </a>
                </button>
            </div>
        </div>
     </section>
    </Fragment>
)

export default CollapsibleBlockAll;