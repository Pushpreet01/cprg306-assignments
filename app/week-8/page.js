"use client";

import React from 'react';
import NewItem from './new-item';
import ItemList from './item-list';
import items from './items.json';
import { useState } from 'react';

function Page() {
    const [itemsList, setItemsList] = useState(items);

    const HandleAddItem = (item) => {
        setItemsList([...itemsList, item]);
        console.log(itemsList);
    };

  return ( 

    <div className="m-5">
        <h1 className="text-center text-3xl font-bold mb-8 text-white">Shopping List</h1>
      <NewItem onAddItem={HandleAddItem}/>
      <ItemList items={itemsList} />
    </div>
  );
}

export default Page;