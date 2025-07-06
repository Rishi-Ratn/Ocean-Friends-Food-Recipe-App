import FoodCard from "./FoodCard";

export default function FoodGrid({ meals }) {
  if (!meals.length) {
    return <p className="text-center mt-8">No meals found.</p>;
  }
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      {meals.map((meal) => (
        <FoodCard key={meal.idMeal} meal={meal} />
      ))}
    </div>
  );
}
