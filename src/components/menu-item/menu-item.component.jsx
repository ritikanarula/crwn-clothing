import React from 'react';
import './menu-item.styles.scss';
import { withRouter } from 'react-router-dom';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
    <div style={{ backgroundImage:`url(${imageUrl})`}} onClick= {() => history.push(`${match.url}${linkUrl}`)}className={`${size} menu-item`}>
        <div className='content'>
            <h1 className='title'>
               {title}
                <div className="subtitle">SHOP NOW</div>
            </h1>
        </div>
    </div>
)

export default withRouter(MenuItem);
