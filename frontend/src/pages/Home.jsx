import { useEffect, useState } from "react";
import Header1 from "../components/Header1";
import Header2 from "../components/Header2";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import FoodGrid from "../components/FoodGrid";

export default function Home() {
  const [meals, setMeals] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [mode, setMode] = useState("browse"); // 'browse' or 'search'

  const fetchAllMeals = async () => {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`);
    const data = await res.json();
    setMeals(data.meals || []);
  };

  const fetchByCategory = async (category) => {
    if (category === "All") {
      fetchAllMeals();
    } else {
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
      const data = await res.json();
      setMeals(data.meals || []);
    }
  };

  const fetchCategories = async () => {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?c=list`);
    const data = await res.json();
    setCategories(["All", ...data.meals.map(c => c.strCategory)]);
  };

  const handleSearch = async (term) => {
    setMode("search");
    setQuery(term);
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`);
    const data = await res.json();
    setMeals(data.meals || []);
  };

  const handleBack = () => {
    setMode("browse");
    setQuery("");
    fetchByCategory(selectedCategory);
  };

  useEffect(() => {
    fetchAllMeals();
    fetchCategories();
  }, []);

  return (
    <div className="p-4 max-w-4xl mx-auto">
      {mode === "browse" ? (
        <>
          <Header1 />
          <SearchBar onSearch={handleSearch} />
          <CategoryFilter
            categories={categories}
            selected={selectedCategory}
            onSelect={(cat) => {
              setSelectedCategory(cat);
              fetchByCategory(cat);
            }}
          />
          <FoodGrid meals={meals} />
        </>
      ) : (
        <>
          <Header2 onBack={handleBack} />
          <SearchBar onSearch={handleSearch} />

          <div className="flex justify-between mb-2">
            <h2 className="font-medium">Search Result</h2>
            <span className="text-sm text-gray-500">{meals.length} results</span>
          </div>

          <FoodGrid meals={meals} />
        </>
      )}
    </div>
  );
}
