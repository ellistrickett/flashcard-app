import React from 'react';

function CategorySelector({ categories, onChange }) {
  return (
    <select onChange={(e) => onChange(e.target.value)}>
      {categories.map((category, idx) => (
        <option key={idx} value={category.file}>
          {category.label}
        </option>
      ))}
    </select>
  );
}

export default CategorySelector;
