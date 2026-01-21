import { useState } from "react";
import axios from "axios";

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const getImages = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://picsum.photos/v2/list?limit=30"
      );
      setImages(response.data);
    } catch (error) {
      console.error("Error fetching images:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      
      {/* Button */}
      <div className="text-center mb-8">
        <button
          onClick={getImages}
          className="px-8 py-3 bg-pink-600 text-white font-semibold rounded-xl
                     hover:scale-110 active:scale-90 transition-transform duration-200
                     shadow-lg"
        >
          {loading ? "Loading..." : "Get Images"}
        </button>
      </div>

      {/* Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {images.map((img) => (
          <div
            key={img.id}
            className="bg-white rounded-lg shadow-md overflow-hidden
                       hover:scale-105 transition-transform duration-200"
          >
            <img
              src={`https://picsum.photos/id/${img.id}/300/200`}
              alt={img.author}
              className="w-full h-40 object-cover"
            />
            <p className="p-2 text-xs text-gray-600 text-center">
              {img.author}
            </p>
          </div>
        ))}
      </div>

    </div>
  );
}

export default App;
