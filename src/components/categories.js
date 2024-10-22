// CategoryTab.js
import React, { useState } from 'react';


const categories = [
  'Technology',
  'Health',
  'Sports',
  'Music',
  'Art',
  'Travel',
  'Food',
  'Education',
];

const CategoryTab = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCategoryClick = (category) => {
    if (selectedCategories.includes(category)) {
      // Remove category if already selected
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    } else if (selectedCategories.length < 3) {
      // Add category if not already selected and less than 3 are selected
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  return (
    <div className="category-tab">
      <h2>Select Categories</h2>
      <div className="category-list">
        {categories.map((category) => (
          <div
            key={category}
            className={`category-item ${
              selectedCategories.includes(category) ? 'active' : ''
            }`}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </div>
        ))}
      </div>
      <div className="selected-categories">
        {selectedCategories.length > 0 && (
          <h4>Selected Categories: {selectedCategories.join(', ')}</h4>
        )}
      </div>
    </div>
  );
};

export default CategoryTab;
