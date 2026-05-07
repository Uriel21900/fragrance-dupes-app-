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
    name: "Baccarat Rouge 540",
    brand: "Maison Francis Kurkdjian",
    price: "$325",
    image: "https://via.placeholder.com/300x300?text=BR540",
    description: "Amber woody fragrance with cedar, saffron and fir balsam",
    dupes: [
      { id: 1, name: "Red Temptation", brand: "Zara", price: "$25", rating: 4.7, image: "https://via.placeholder.com/150?text=RT", description: "98% similar - The best budget-friendly alternative" },
      { id: 2, name: "Cloud", brand: "Ariana Grande", price: "$55", rating: 4.5, image: "https://via.placeholder.com/150?text=Cloud", description: "Popular alternative with similar DNA, more girly interpretation" },
      { id: 3, name: "Ana Abiyedh Rouge", brand: "Lattafa", price: "$30", rating: 4.6, image: "https://via.placeholder.com/150?text=Ana", description: "Smooth Middle Eastern alternative" },
      { id: 4, name: "Amber Rouge", brand: "Orientica", price: "$35", rating: 4.4, image: "https://via.placeholder.com/150?text=Amber", description: "Close dupe that many prefer to the original" },
    ]
  },
  {
    id: 2,
    name: "Creed Aventus",
    brand: "Creed",
    price: "$350",
    image: "https://via.placeholder.com/300x300?text=Aventus",
    description: "Iconic fruity and woody fragrance with pineapple and birch",
    dupes: [
      { id: 5, name: "Club de Nuit Intense", brand: "Armaf", price: "$55", rating: 4.7, image: "https://via.placeholder.com/150?text=CDNI", description: "The most famous Aventus clone" },
      { id: 6, name: "Aventus for Her", brand: "Al Wataniah", price: "$35", rating: 4.3, image: "https://via.placeholder.com/150?text=AFH", description: "Unisex version with tropical notes" },
      { id: 7, name: "Supremes", brand: "Afnan", price: "$45", rating: 4.4, image: "https://via.placeholder.com/150?text=Sup", description: "Excellent performance and longevity" },
      { id: 8, name: "B Rouge", brand: "Fragrance World", price: "$20", rating: 4.5, image: "https://via.placeholder.com/150?text=BR", description: "Incredible value at just $11-20" },
    ]
  },
  {
    id: 3,
    name: "Good Girl",
    brand: "Carolina Herrera",
    price: "$125",
    image: "https://via.placeholder.com/300x300?text=Good+Girl",
    description: "Sweet gourmand with almond, coffee and tuberose",
    dupes: [
      { id: 9, name: "Stiletto", brand: "ALT. Fragrances", price: "$30", rating: 4.8, image: "https://via.placeholder.com/150?text=Stiletto", description: "95% similarity - Closest overall match" },
      { id: 10, name: "Femme Fatale", brand: "Oakcha", price: "$35", rating: 4.6, image: "https://via.placeholder.com/150?text=Femme", description: "Best for longevity with extrait concentration" },
      { id: 11, name: "Fruity Almond", brand: "Dossier", price: "$39", rating: 4.4, image: "https://via.placeholder.com/150?text=Fruity", description: "90% similarity with juicier peach note" },
      { id: 12, name: "Miss Dream", brand: "La Rive", price: "$20", rating: 4.2, image: "https://via.placeholder.com/150?text=Miss", description: "Budget option at 85% similarity" },
    ]
  },
  {
    id: 4,
    name: "Sauvage",
    brand: "Dior",
    price: "$155",
    image: "https://via.placeholder.com/300x300?text=Sauvage",
    description: "Fresh and spicy fragrance with ambroxan and pepper",
    dupes: [
      { id: 13, name: "Asad", brand: "Lattafa", price: "$25", rating: 4.4, image: "https://via.placeholder.com/150?text=Asad", description: "Amazing value for money clone" },
      { id: 14, name: "Sillage", brand: "House of Matriarch", price: "$55", rating: 4.6, image: "https://via.placeholder.com/150?text=Sillage", description: "Incredible scent similarity with better performance" },
      { id: 15, name: "The Tux", brand: "Mancera", price: "$95", rating: 4.3, image: "https://via.placeholder.com/150?text=Tux", description: "Luxurious packaging with great scent" },
    ]
  },
  {
    id: 5,
    name: "Bleu de Chanel",
    brand: "Chanel",
    price: "$145",
    image: "https://via.placeholder.com/300x300?text=Bleu",
    description: "Woody aromatic fragrance with incense and citrus",
    dupes: [
      { id: 16, name: "Iconic", brand: "Al Wataniah", price: "$30", rating: 4.2, image: "https://via.placeholder.com/150?text=Iconic", description: "Very close resemblance to the original" },
      { id: 17, name: "Bourbon", brand: "Zimaya", price: "$28", rating: 4.0, image: "https://via.placeholder.com/150?text=Bourbon", description: "Great alternative for daily wear" },
      { id: 18, name: "Supremes", brand: "Afnan", price: "$40", rating: 4.1, image: "https://via.placeholder.com/150?text=Supremes", description: "Long-lasting with excellent projection" },
    ]
  },
  {
    id: 6,
    name: "Acqua di Gio",
    brand: "Giorgio Armani",
    price: "$125",
    image: "https://via.placeholder.com/300x300?text=Acqua+di+Gio",
    description: "A classic aquatic fragrance with citrus and wood notes",
    dupes: [
      { id: 19, name: "Club de Nuit", brand: "Armaf", price: "$45", rating: 4.5, image: "https://via.placeholder.com/150?text=CDN", description: "Similar fresh aquatic notes at a fraction of the price" },
      { id: 20, name: "Blue de Chance", brand: "Afnan", price: "$35", rating: 4.3, image: "https://via.placeholder.com/150?text=BDC", description: "Excellent clone with comparable longevity" },
    ]
  },
  {
    id: 7,
    name: "Terre d'Hermès",
    brand: "Hermès",
    price: "$135",
    image: "https://via.placeholder.com/300x300?text=Terre",
    description: "Earthy woody fragrance with orange and pepper",
    dupes: [
      { id: 21, name: "Tres Nuit", brand: "Mancera", price: "$85", rating: 4.4, image: "https://via.placeholder.com/150?text=TN", description: "Sophisticated alternative with similar earthy notes" },
      { id: 22, name: "Oud for Greatness", brand: "Initio", price: "$65", rating: 4.5, image: "https://via.placeholder.com/150?text=OFG", description: "Unique twist on earthy fragrances" },
    ]
  },
  {
    id: 8,
    name: "Prada Paradoxe",
    brand: "Prada",
    price: "$135",
    image: "https://via.placeholder.com/300x300?text=Paradoks",
    description: "Powdery amber floral with jasmine and vanilla",
    dupes: [
      { id: 23, name: "Paradoks", brand: "CA Perfume", price: "$13", rating: 4.3, image: "https://via.placeholder.com/150?text=Paradoks", description: "Luxury dupe at fraction of price" },
      { id: 24, name: "Unexpected Joy", brand: "Zara", price: "$25", rating: 4.1, image: "https://via.placeholder.com/150?text=Unexpected", description: "Inexpensive alternative" },
      { id: 25, name: "Hédonisme", brand: "Divain", price: "$22", rating: 4.0, image: "https://via.placeholder.com/150?text=Hedonisme", description: "Similar powdery amber character" },
    ]
  },
  {
    id: 9,
    name: "Gentle Fluidity Gold",
    brand: "Maison Francis Kurkdjian",
    price: "$250",
    image: "https://via.placeholder.com/300x300?text=GFG",
    description: "Silk vanilla with juniper berries and amber",
    dupes: [
      { id: 26, name: "Golden Dust", brand: "Sunnamusk", price: "$30", rating: 4.2, image: "https://via.placeholder.com/150?text=Golden", description: "Very close match with more velvety character" },
      { id: 27, name: "Snowflakes & Cashmere", brand: "Bath & Body Works", price: "$25", rating: 4.0, image: "https://via.placeholder.com/150?text=Snowflakes", description: "Affordable dupe, more velvety" },
    ]
  },
  {
    id: 10,
    name: "Athalia",
    brand: "Parfums de Marly",
    price: "$350",
    image: "https://via.placeholder.com/300x300?text=Athalia",
    description: "Powdery floral with orange blossom and vanilla",
    dupes: [
      { id: 28, name: "Maahir", brand: "Lattafa", price: "$40", rating: 4.5, image: "https://via.placeholder.com/150?text=Maahir", description: "85% similarity, excellent orange blossom and vanilla" },
      { id: 29, name: "Fields at Nightfall", brand: "Zara", price: "$30", rating: 4.3, image: "https://via.placeholder.com/150?text=Fields", description: "Focuses on powdery iris and vanilla combo" },
      { id: 30, name: "Club de Nuit Woman", brand: "Armaf", price: "$45", rating: 4.2, image: "https://via.placeholder.com/150?text=CDN+W", description: "Similar floral heart with good longevity" },
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