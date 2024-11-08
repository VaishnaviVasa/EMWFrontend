import React from 'react';

const FilterButtons = ({ onFilter }) => {
  const filters = [
    'Self help', 'Reducing stress', 'Anxiety', 'Panic attacks', 'Breathing exercises', 'Stretching', 'Calm music', 'Meditation'
  ];

  return (
    <div className="filters">
      {filters.map((filter) => (
        <button key={filter} onClick={() => onFilter(filter)}>
          {filter}
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;
