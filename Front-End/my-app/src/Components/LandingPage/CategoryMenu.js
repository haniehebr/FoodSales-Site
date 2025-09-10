import React, { useEffect, useState } from "react";
import "./CategoryMenu.css";

const CategoryMenu = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/categories/")
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <nav className="category-menu">
      <h2>Categories</h2>
      <ul className="category-list">
        {categories.map((category) => (
          <li key={category.id} className="category-item">
            {category.name}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default CategoryMenu;
