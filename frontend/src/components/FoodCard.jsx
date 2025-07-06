export default function FoodCard({ meal }) {
  return (
    <div className="relative rounded-xl overflow-hidden shadow hover:shadow-md transition">
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className="w-full h-40 object-cover"
      />

      <div className="absolute inset-0 bg-black/50 text-white flex flex-col justify-end p-2">
        
        <div className="absolute top-2 right-2 bg-yellow-100 text-black text-xs px-2 py-1 rounded-full">
          ⭐ 4.0
        </div>

        <div>
          <h2 className="text-sm font-medium truncate">{meal.strMeal}</h2>
          <p className="text-xs">By Chef</p>
        </div>
      </div>
    </div>
  );
}




// export default function FoodCard({ meal }) {
//   return (
//     <div className="relative rounded-xl overflow-hidden shadow hover:shadow-md transition">
//       <img
//         src={meal.strMealThumb}
//         alt={meal.strMeal}
//         className="w-full h-40 object-cover"
//       />
//       <div className="absolute bottom-0 bg-black/50 w-full text-white p-2">
//         <h2 className="text-sm font-medium truncate">{meal.strMeal}</h2>
//         <p className="text-xs">By Chef</p>
//         <div className="text-yellow-400 text-xs">⭐ 4.0</div>
//       </div>
//     </div>
//   );
// }


// export default function FoodCard({ meal }) {
//   return (
//     <div className="relative rounded-xl overflow-hidden shadow hover:shadow-md transition group">
//       {/* Image */}
//       <img
//         src={meal.strMealThumb}
//         alt={meal.strMeal}
//         className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
//       />

//       {/* Bottom overlay */}
//       <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-2">
//         <h2 className="text-sm font-medium text-white truncate">
//           {meal.strMeal}
//         </h2>
//         <div className="flex justify-between text-xs text-white">
//           <span>By Chef</span>
//           <span className="text-yellow-400">⭐ 4.0</span>
//         </div>
//       </div>
//     </div>
//   );
// }
