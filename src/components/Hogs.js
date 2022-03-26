import React, {useState} from "react";
import Hog from "./Hog";

function Hogs({hogs}) {
  const [greaseFilter, changeFilter] = useState('all');
  const [sortPig, sortBy] = useState('none');
  const [isHidden, hiddenOrNot] = useState(false);

  const filteredHogs = hogs.filter((hog) => {
    if (greaseFilter === 'all') return true;
    else if (greaseFilter === 'grease') return hog.greased;
    else return !hog.greased;
  });

  const sortedFiltered = sortPig === 'none' ?
    filteredHogs :
    filteredHogs.sort((a, b) => {
      if (a[sortPig] < b[sortPig]) return -1;
      if (a[sortPig] > b[sortPig]) return 1;
      return 0;
    });

  const theHogs = sortedFiltered.map((hog) => (
    <Hog
      key={hog.name}
      greased={hog.greased}
      medal={hog['highest medal achieved']}
      image={hog.image}
      name={hog.name}
      specialty={hog.specialty}
      weight={hog.weight}
    />
  ));

  return (
    <div >
      <label>
        {'Filter Pigs '}
        <select onChange={(e) => changeFilter(e.target.value)} name="greaseStatus" >
          <option value="all">All</option>
          <option value="grease">Greased</option>
          <option value="notgreased">Not Greased</option>
        </select>
      </label>
      <label>
        {' Sort by '}
        <select onChange={(e) => sortBy(e.target.value)} name="sortPigs">
          <option value="none">No Sort</option>
          <option value="name">Name</option>
          <option value="weight">Weight</option>
        </select>
      </label>
      <span>{'  '}</span>
      <button onClick={() => hiddenOrNot(!isHidden)} >
        {isHidden ? 'Show Hogs' : 'Hide Hogs'}
      </button>
      <br /><br />
      <section style={{display: isHidden ? 'none' : 'block'}} >
        {theHogs}
      </section>
    </div>
  )
}

export default Hogs;