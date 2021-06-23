import React from 'react';
import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size }) => (
    <div style={{ backgroundImage:`url(${imageUrl})`}} className={`${size} menu-item`}>
        <div className='content'>
            <h1 className='title'>
               {title}
                <div className="subtitle">SHOP NOW</div>
            </h1>
        </div>
    </div>
)

export default MenuItem;
