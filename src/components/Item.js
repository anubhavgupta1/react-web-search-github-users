import React  from 'react';

const Item = (item)=>
{
    const { icon, label, value, color } = item;
    return (
    <article className="item">
        <span className = {color}>{icon}</span>
        <div>
            <h3>{value}</h3>
            <p>{label}</p>
        </div>
    </article>);
}

export default Item;