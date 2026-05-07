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
    image: "https://img.fraganty.ai/perfume/25967.jpg",
    description: "Amber woody fragrance with cedar, saffron and fir balsam",
    dupes: [
      { id: 1, name: "Red Temptation", brand: "Zara", price: "$25", rating: 4.7, image: "https://img.fraganty.ai/perfume/52874.jpg", description: "98% similar - The best budget-friendly alternative" },
      { id: 2, name: "Cloud", brand: "Ariana Grande", price: "$55", rating: 4.5, image: "https://img.fraganty.ai/perfume/41234.jpg", description: "Popular alternative with similar DNA, more girly interpretation" },
      { id: 3, name: "Ana Abiyedh Rouge", brand: "Lattafa", price: "$30", rating: 4.6, image: "https://img.fraganty.ai/perfume/63456.jpg", description: "88% similarity - Smooth Middle Eastern alternative" },
      { id: 4, name: "Amber Rouge", brand: "Orientica", price: "$35", rating: 4.4, image: "https://img.fraganty.ai/perfume/67890.jpg", description: "Close dupe that many prefer to the original" },
      { id: 31, name: "Baroque Rouge 540", brand: "Maison Alhambra", price: "$32", rating: 4.5, image: "https://img.fraganty.ai/perfume/68901.jpg", description: "Warm toasted woody take with crystalized sugar effect" },
      { id: 32, name: "Amber Oud Rouge", brand: "Al Haramain", price: "$45", rating: 4.4, image: "https://img.fraganty.ai/perfume/69012.jpg", description: "99% there with monstrous longevity" },
    ]
  },
  {
    id: 2,
    name: "Creed Aventus",
    brand: "Creed",
    price: "$350",
    image: "https://img.fraganty.ai/perfume/12345.jpg",
    description: "Iconic fruity and woody fragrance with pineapple and birch",
    dupes: [
      { id: 5, name: "Club de Nuit Intense", brand: "Armaf", price: "$55", rating: 4.7, image: "https://img.fraganty.ai/perfume/23456.jpg", description: "The most famous Aventus clone" },
      { id: 6, name: "Aventus for Her", brand: "Al Wataniah", price: "$35", rating: 4.3, image: "https://img.fraganty.ai/perfume/34567.jpg", description: "Unisex version with tropical notes" },
      { id: 7, name: "Supremes", brand: "Afnan", price: "$45", rating: 4.4, image: "https://img.fraganty.ai/perfume/45678.jpg", description: "Excellent performance and longevity" },
      { id: 8, name: "B Rouge", brand: "Fragrance World", price: "$20", rating: 4.5, image: "https://img.fraganty.ai/perfume/56789.jpg", description: "Incredible value at just $11-20" },
      { id: 34, name: "B Rouge Extrait", brand: "Fragrance World", price: "$25", rating: 4.6, image: "https://img.fraganty.ai/perfume/67891.jpg", description: "Extrait version with incredible similarity" },
    ]
  },
  {
    id: 3,
    name: "Good Girl",
    brand: "Carolina Herrera",
    price: "$125",
    image: "https://img.fraganty.ai/perfume/78901.jpg",
    description: "Sweet gourmand with almond, coffee and tuberose",
    dupes: [
      { id: 9, name: "Stiletto", brand: "ALT. Fragrances", price: "$30", rating: 4.8, image: "https://img.fraganty.ai/perfume/89012.jpg", description: "95% similarity - Closest overall match" },
      { id: 10, name: "Femme Fatale", brand: "Oakcha", price: "$35", rating: 4.6, image: "https://img.fraganty.ai/perfume/90123.jpg", description: "Best for longevity with extrait concentration" },
      { id: 11, name: "Fruity Almond", brand: "Dossier", price: "$39", rating: 4.4, image: "https://img.fraganty.ai/perfume/12346.jpg", description: "90% similarity with juicier peach note" },
      { id: 12, name: "Miss Dream", brand: "La Rive", price: "$20", rating: 4.2, image: "https://img.fraganty.ai/perfume/23457.jpg", description: "Budget option at 85% similarity" },
    ]
  },
  {
    id: 4,
    name: "Sauvage",
    brand: "Dior",
    price: "$155",
    image: "https://img.fraganty.ai/perfume/34568.jpg",
    description: "Fresh and spicy fragrance with ambroxan and pepper",
    dupes: [
      { id: 13, name: "Asad", brand: "Lattafa", price: "$25", rating: 4.4, image: "https://img.fraganty.ai/perfume/45679.jpg", description: "Amazing value for money clone" },
      { id: 14, name: "Sillage", brand: "House of Matriarch", price: "$55", rating: 4.6, image: "https://img.fraganty.ai/perfume/56780.jpg", description: "Incredible scent similarity with better performance" },
      { id: 15, name: "The Tux", brand: "Mancera", price: "$95", rating: 4.3, image: "https://img.fraganty.ai/perfume/67892.jpg", description: "Luxurious packaging with great scent" },
    ]
  },
  {
    id: 5,
    name: "Bleu de Chanel",
    brand: "Chanel",
    price: "$145",
    image: "https://img.fraganty.ai/perfume/25967.jpg",
    description: "Woody aromatic fragrance with incense and citrus",
    dupes: [
      { id: 16, name: "Iconic", brand: "Al Wataniah", price: "$30", rating: 4.2, image: "https://img.fraganty.ai/perfume/78903.jpg", description: "Very close resemblance to the original" },
      { id: 17, name: "Bourbon", brand: "Zimaya", price: "$28", rating: 4.0, image: "https://img.fraganty.ai/perfume/89014.jpg", description: "Great alternative for daily wear" },
      { id: 18, name: "Supremes", brand: "Afnan", price: "$40", rating: 4.1, image: "https://img.fraganty.ai/perfume/90125.jpg", description: "Long-lasting with excellent projection" },
    ]
  },
  {
    id: 6,
    name: "Acqua di Gio",
    brand: "Giorgio Armani",
    price: "$125",
    image: "https://img.fraganty.ai/perfume/12347.jpg",
    description: "A classic aquatic fragrance with citrus and wood notes",
    dupes: [
      { id: 19, name: "Club de Nuit", brand: "Armaf", price: "$45", rating: 4.5, image: "https://img.fraganty.ai/perfume/23458.jpg", description: "Similar fresh aquatic notes at a fraction of the price" },
      { id: 20, name: "Blue de Chance", brand: "Afnan", price: "$35", rating: 4.3, image: "https://img.fraganty.ai/perfume/34569.jpg", description: "Excellent clone with comparable longevity" },
    ]
  },
  {
    id: 7,
    name: "Terre d'Hermès",
    brand: "Hermès",
    price: "$135",
    image: "https://img.fraganty.ai/perfume/45680.jpg",
    description: "Earthy woody fragrance with orange and pepper",
    dupes: [
      { id: 21, name: "Tres Nuit", brand: "Mancera", price: "$85", rating: 4.4, image: "https://img.fraganty.ai/perfume/56781.jpg", description: "Sophisticated alternative with similar earthy notes" },
      { id: 22, name: "Oud for Greatness", brand: "Initio", price: "$65", rating: 4.5, image: "https://img.fraganty.ai/perfume/67893.jpg", description: "Unique twist on earthy fragrances" },
    ]
  },
  {
    id: 8,
    name: "Prada Paradoxe",
    brand: "Prada",
    price: "$135",
    image: "https://img.fraganty.ai/perfume/78904.jpg",
    description: "Powdery amber floral with jasmine and vanilla",
    dupes: [
      { id: 23, name: "Paradoks", brand: "CA Perfume", price: "$13", rating: 4.3, image: "https://img.fraganty.ai/perfume/89015.jpg", description: "Luxury dupe at fraction of price" },
      { id: 24, name: "Unexpected Joy", brand: "Zara", price: "$25", rating: 4.1, image: "https://img.fraganty.ai/perfume/90126.jpg", description: "Inexpensive alternative" },
    ]
  },
  {
    id: 9,
    name: "Gentle Fluidity Gold",
    brand: "Maison Francis Kurkdjian",
    price: "$250",
    image: "https://img.fraganty.ai/perfume/12348.jpg",
    description: "Silk vanilla with juniper berries and amber",
    dupes: [
      { id: 26, name: "Golden Dust", brand: "Sunnamusk", price: "$30", rating: 4.2, image: "https://img.fraganty.ai/perfume/23459.jpg", description: "Very close match with more velvety character" },
      { id: 27, name: "Snowflakes & Cashmere", brand: "Bath & Body Works", price: "$25", rating: 4.0, image: "https://img.fraganty.ai/perfume/34570.jpg", description: "Affordable dupe, more velvety" },
    ]
  },
  {
    id: 10,
    name: "Athalia",
    brand: "Parfums de Marly",
    price: "$350",
    image: "https://img.fraganty.ai/perfume/45681.jpg",
    description: "Powdery floral with orange blossom and vanilla",
    dupes: [
      { id: 28, name: "Maahir", brand: "Lattafa", price: "$40", rating: 4.5, image: "https://img.fraganty.ai/perfume/56782.jpg", description: "85% similarity, excellent orange blossom and vanilla" },
      { id: 29, name: "Fields at Nightfall", brand: "Zara", price: "$30", rating: 4.3, image: "https://img.fraganty.ai/perfume/67894.jpg", description: "Focuses on powdery iris and vanilla combo" },
    ]
  },
  {
    id: 11,
    name: "Tom Ford Black Orchid",
    brand: "Tom Ford",
    price: "$185",
    image: "https://img.fraganty.ai/perfume/78905.jpg",
    description: "Rich floral oriental with black truffle and ylang-ylang",
    dupes: [
      { id: 35, name: "Black Afgano", brand: "Nasomatto", price: "$120", rating: 4.4, image: "https://img.fraganty.ai/perfume/89016.jpg", description: "Similar dark gourmand character" },
      { id: 36, name: "Oud for Greatness", brand: "Initio", price: "$65", rating: 4.5, image: "https://img.fraganty.ai/perfume/90127.jpg", description: "Middle Eastern take on the DNA" },
    ]
  },
  {
    id: 12,
    name: "Dior Addict",
    brand: "Christian Dior",
    price: "$120",
    image: "https://img.fraganty.ai/perfume/12349.jpg",
    description: "Gourmand vanilla with licorice and iris",
    dupes: [
      { id: 37, name: "5th Avenue Premiere", brand: "Elizabeth Arden", price: "$35", rating: 4.2, image: "https://img.fraganty.ai/perfume/23460.jpg", description: "Similar sweet vanilla" },
      { id: 38, name: "Rare Diamonds", brand: "Avon", price: "$25", rating: 4.0, image: "https://img.fraganty.ai/perfume/34571.jpg", description: "Budget friendly alternative" },
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