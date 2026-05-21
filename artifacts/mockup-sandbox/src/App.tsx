import { Card, CardContent } from "./components/ui/card";
import { Input } from "./components/ui/input";

function App() {
  const recipes = [
    {
      id: 1,
      title: "Chicken Biryani",
      image:
        "https://images.unsplash.com/photo-1563379091339-03246963d96c",
    },
    {
      id: 2,
      title: "Paneer Curry",
      image:
        "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center mb-6">
        Lilly Recipes 🍲
      </h1>

      <div className="max-w-md mx-auto mb-8">
        <Input placeholder="Search recipes..." />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {recipes.map((recipe) => (
          <Card key={recipe.id} className="overflow-hidden">
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-56 object-cover"
            />

            <CardContent className="p-4">
              <h2 className="text-xl font-semibold">
                {recipe.title}
              </h2>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default App;
