import { useState } from 'react'
import './App.css'

interface Dupe {
  id: number
  name: string
  brand: string
  price: string
  rating: number
  image: string
  description: string
}

interface Fragrance {
  id: number
  name: string
  brand: string
  price: string
  image: string
  description: string
  dupes: Dupe[]
}

const fragrances: Fragrance[] = [
  {
    id: 1,
    name: "Acqua di Gio",
    brand: "Giorgio Armani",
    price: "$125",
    image: "https://via.placeholder.com/300x300?text=Acqua+di+Gio",
    description: "A classic aquatic fragrance with citrus and wood notes",
    dupes: [
      { id: 1, name: "Club de Nuit", brand: "Armaf", price: "$45", rating: 4.5, image: "https://via.placeholder.com/150?text=CDN", description: "Similar fresh aquatic notes at a fraction of the price" },
      { id: 2, name: "Blue de Chance", brand: "Afnan", price: "$35", rating: 4.3, image: "https://via.placeholder.com/150?text=BDC", description: "Excellent clone with comparable longevity" },
      { id: 3, name: "Tres Nuit", brand: "Mancera", price: "$85", rating: 4.2, image: "https://via.placeholder.com/150?text=TN", description: "Premium alternative with Mediterranean vibes" },
    ]
  },
  {
    id: 2,
    name: "Sauvage",
    brand: "Dior",
    price: "$155",
    image: "https://via.placeholder.com/300x300?text=Sauvage",
    description: "Fresh and spicy fragrance with ambroxan and pepper",
    dupes: [
      { id: 4, name: "Sillage", brand: "House of Matriarch", price: "$55", rating: 4.6, image: "https://via.placeholder.com/150?text=Sillage", description: "Incredible scent similarity with better performance" },
      { id: 5, name: "Asad", brand: "Lattafa", price: "$25", rating: 4.4, image: "https://via.placeholder.com/150?text=Asad", description: "Amazing value for money clone" },
      { id: 6, name: "The Tux", brand: "Mancera", price: "$95", rating: 4.3, image: "https://via.placeholder.com/150?text=Tux", description: "Luxurious packaging with great scent" },
    ]
  },
  {
    id: 3,
    name: "Bleu de Chanel",
    brand: "Chanel",
    price: "$145",
    image: "https://via.placeholder.com/300x300?text=Bleu",
    description: "Woody aromatic fragrance with incense and citrus",
    dupes: [
      { id: 7, name: "Iconic", brand: "Al Wataniah", price: "$30", rating: 4.2, image: "https://via.placeholder.com/150?text=Iconic", description: "Very close resemblance to the original" },
      { id: 8, name: "Bourbon", brand: "Zimaya", price: "$28", rating: 4.0, image: "https://via.placeholder.com/150?text=Bourbon", description: "Great alternative for daily wear" },
      { id: 9, name: "Supremes", brand: "Afnan", price: "$40", rating: 4.1, image: "https://via.placeholder.com/150?text=Supremes", description: "Long-lasting with excellent projection" },
    ]
  },
  {
    id: 4,
    name: "Terre d'Hermès",
    brand: "Hermès",
    price: "$135",
    image: "https://via.placeholder.com/300x300?text=Terre",
    description: "Earthy woody fragrance with orange and pepper",
    dupes: [
      { id: 10, name: "Tres Nuit", brand: "Mancera", price: "$85", rating: 4.4, image: "https://via.placeholder.com/150?text=TN", description: "Sophisticated alternative with similar earthy notes" },
      { id: 11, name: "Oud for Greatness", brand: "Initio", price: "$65", rating: 4.5, image: "https://via.placeholder.com/150?text=OFG", description: "Unique twist on earthy fragrances" },
    ]
  },
  {
    id: 5,
    name: "Creed Aventus",
    brand: "Creed",
    price: "$350",
    image: "https://via.placeholder.com/300x300?text=Aventus",
    description: "Iconic fruity and woody fragrance with pineapple and birch",
    dupes: [
      { id: 12, name: "Club de Nuit Intense", brand: "Armaf", price: "$55", rating: 4.7, image: "https://via.placeholder.com/150?text=CDNI", description: "The most famous Aventus clone" },
      { id: 13, name: "Aventus for Her", brand: "Al Wataniah", price: "$35", rating: 4.3, image: "https://via.placeholder.com/150?text=AFH", description: "Unisex version with tropical notes" },
      { id: 14, name: "Pineapple Vintage", brand: "Mont Blanc", price: "$50", rating: 4.2, image: "https://via.placeholder.com/150?text=PV", description: "Similar pineapple opening" },
      { id: 15, name: "Supremes", brand: "Afnan", price: "$45", rating: 4.4, image: "https://via.placeholder.com/150?text=Sup", description: "Excellent performance and longevity" },
    ]
  },
]

function App() {
  const [selectedFragrance, setSelectedFragrance] = useState<Fragrance | null>(null)
  const [searchTerm, setSearchTerm] = useState('')

  const filteredFragrances = fragrances.filter(f => 
    f.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    f.brand.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="app">
      <header className="header">
        <h1>Fragrance Dupes</h1>
        <p>Find affordable alternatives to your favorite scents</p>
        <input
          type="text"
          placeholder="Search fragrances..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search"
        />
      </header>

      <main>
        {selectedFragrance ? (
          <div className="dupes-view">
            <button onClick={() => setSelectedFragrance(null)} className="back-btn">
              ← Back to all fragrances
            </button>
            <div className="fragrance-header">
              <img src={selectedFragrance.image} alt={selectedFragrance.name} />
              <div>
                <h2>{selectedFragrance.name}</h2>
                <p className="brand">{selectedFragrance.brand}</p>
                <p>{selectedFragrance.description}</p>
                <p className="price">Original: {selectedFragrance.price}</p>
              </div>
            </div>
            <h3>Dupes & Alternatives</h3>
            <div className="dupes-grid">
              {selectedFragrance.dupes.map(dupe => (
                <div key={dupe.id} className="dupe-card">
                  <img src={dupe.image} alt={dupe.name} />
                  <h4>{dupe.name}</h4>
                  <p className="brand">{dupe.brand}</p>
                  <p className="price">{dupe.price}</p>
                  <p className="rating">★ {dupe.rating}</p>
                  <p className="description">{dupe.description}</p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="fragrances-grid">
            {filteredFragrances.map(fragrance => (
              <div 
                key={fragrance.id} 
                className="fragrance-card"
                onClick={() => setSelectedFragrance(fragrance)}
              >
                <img src={fragrance.image} alt={fragrance.name} />
                <h3>{fragrance.name}</h3>
                <p className="brand">{fragrance.brand}</p>
                <p className="price">{fragrance.price}</p>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}

export default App