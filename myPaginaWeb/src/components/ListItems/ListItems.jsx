import React from 'react'
import { Link } from 'react-router-dom';

const ListItems = ({ items , deleteItem }) => {
  return (
    <div>
        {items.map((item) => (
        <>
           <Link to={`${item.id}`}>
            <div 
              key={item.id} 
              style={{ background: "skyblue", border: "1px solid blue"}}
            > 
            <h3 key={item.id}>{item.title}</h3> 
            <img src={item.images} alt="producto" width={200} height={200} />
            <p>$ {item.price}</p>
            </div>
            </Link>
          <button onClick={() => deleteItem(item.id)}>Delete</button>
          <button onClick={() => updateItem(item.id)}>Update</button>
         </>
       ))}
    </div>
  );
}

export default ListItems;