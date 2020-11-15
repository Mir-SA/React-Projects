import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const allCategories = ['all', ...new Set(items.map((item) => item.category))]
console.log(allCategories);

function App() {
  var [menuItems, setMenuItems] = useState(items)
  var [categories, setCategories] = useState(allCategories)

  var filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items)
      return
    }
    var newItems = items.filter((item) => item.category === category)
    setMenuItems(newItems)
  }

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories filterItems={filterItems} categories={categories}/>
        <Menu items={menuItems}/>
      </section>
    </main>
  )
}

export default App;
