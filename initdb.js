import sql from "better-sqlite3";

const dummyCars = [
  {
    id: 1,
    title: "Tesla Model 3",
    price: "$42,990",
    year: 2023,
    mileage: "1,200 miles",
    fuelType: "Electric",
    cylinderNumber: 0,
    location: "San Francisco, CA",
    features: ["Autopilot", "AWD", "Long Range", "Premium Interior"],
    description: "The Tesla Model 3 is an electric four-door sedan with minimalist styling and cutting-edge technology. This Long Range AWD model features enhanced range and dual motor all-wheel drive.",
    image: "https://readdy.ai/api/search-image?query=2023%2520Tesla%2520Model%25203%2520in%2520sleek%2520white%2520color%252C%2520professional%2520automotive%2520photography%2520with%2520clean%2520studio%2520background%252C%2520front%2520three-quarter%2520view%2520showing%2520modern%2520design%252C%2520LED%2520headlights%2520visible%252C%2520minimalist%2520interior%2520visible%2520through%2520windows%252C%2520high-resolution%2520detailed%2520image%2520with%2520perfect%2520lighting&width=600&height=400&seq=car1&orientation=landscape",
    isVerified: true,
    deliveryAvailable: true,
    virtualTour: false
  },
  {
    id: 2,
    title: "BMW M4 Competition",
    price: "$78,500",
    year: 2022,
    mileage: "8,450 miles",
    fuelType: "Gasoline",
    cylinderNumber: 6,
    location: "Miami, FL",
    features: ["503 HP", "Carbon Package", "M Drive", "Harman Kardon"],
    description: "The BMW M4 Competition delivers exhilarating performance with its twin-turbocharged inline-six engine. This example features the desirable Carbon Package and M Drive performance features.",
    image: "https://readdy.ai/api/search-image?query=2022%2520BMW%2520M4%2520Competition%2520in%2520metallic%2520blue%252C%2520professional%2520automotive%2520photography%2520on%2520clean%2520background%252C%2520front%2520three-quarter%2520view%2520showing%2520aggressive%2520styling%252C%2520LED%2520headlights%252C%2520carbon%2520fiber%2520details%2520visible%252C%2520premium%2520wheels%252C%2520high-resolution%2520detailed%2520image%2520with%2520perfect%2520lighting&width=600&height=400&seq=car2&orientation=landscape",
    isVerified: true,
    deliveryAvailable: false,
    virtualTour: true
  },
  {
    id: 3,
    title: "Porsche 911 Carrera S",
    price: "$124,900",
    year: 2021,
    mileage: "12,350 miles",
    fuelType: "Gasoline",
    cylinderNumber: 6,
    location: "Los Angeles, CA",
    features: ["443 HP", "Sport Chrono", "PDK", "Bose Sound"],
    description: "The Porsche 911 Carrera S continues the iconic sports car legacy with its flat-six engine and precision handling. This example includes the desirable Sport Chrono package and PDK transmission.",
    image: "https://readdy.ai/api/search-image?query=2021%2520Porsche%2520911%2520Carrera%2520S%2520in%2520classic%2520silver%252C%2520professional%2520automotive%2520photography%2520with%2520clean%2520studio%2520background%252C%2520front%2520three-quarter%2520view%2520showing%2520iconic%2520design%252C%2520LED%2520headlights%2520visible%252C%2520premium%2520wheels%252C%2520high-resolution%2520detailed%2520image%2520with%2520perfect%2520lighting&width=600&height=400&seq=car3&orientation=landscape",
    isVerified: true,
    deliveryAvailable: false,
    virtualTour: false
  },
  {
    id: 4,
    title: "Mercedes-Benz S-Class",
    price: "$109,800",
    year: 2023,
    mileage: "3,200 miles",
    fuelType: "Gasoline",
    cylinderNumber: 8,
    location: "New York, NY",
    features: ["429 HP", "4MATIC", "Burmester 3D", "Executive Package"],
    description: "The Mercedes-Benz S-Class sets new standards in luxury and technology. This well-equipped example features the Executive Package and state-of-the-art Burmester sound system.",
    image: "https://readdy.ai/api/search-image?query=2023%2520Mercedes-Benz%2520S-Class%2520in%2520elegant%2520black%252C%2520professional%2520automotive%2520photography%2520with%2520clean%2520studio%2520background%252C%2520front%2520three-quarter%2520view%2520showing%2520luxury%2520design%252C%2520LED%2520headlights%2520visible%252C%2520premium%2520wheels%252C%2520high-resolution%2520detailed%2520image%2520with%2520perfect%2520lighting&width=600&height=400&seq=car4&orientation=landscape",
    isVerified: true,
    deliveryAvailable: true,
    virtualTour: true
  },
  {
    id: 5,
    title: "Audi e-tron GT",
    price: "$102,400",
    year: 2022,
    mileage: "5,800 miles",
    fuelType: "Electric",
    cylinderNumber: 0,
    location: "Chicago, IL",
    features: ["522 HP", "Quattro", "Fast Charging", "Bang & Olufsen"],
    description: "The Audi e-tron GT combines stunning design with electric performance. This example showcases Audi's commitment to luxury and sustainability with its advanced electric powertrain.",
    image: "https://readdy.ai/api/search-image?query=2022%2520Audi%2520e-tron%2520GT%2520in%2520modern%2520gray%252C%2520professional%2520automotive%2520photography%2520with%2520clean%2520studio%2520background%252C%2520front%2520three-quarter%2520view%2520showing%2520sleek%2520design%252C%2520LED%2520headlights%2520visible%252C%2520premium%2520wheels%252C%2520high-resolution%2520detailed%2520image%2520with%2520perfect%2520lighting&width=600&height=400&seq=car5&orientation=landscape",
    isVerified: true,
    deliveryAvailable: true,
    virtualTour: true
  },
  {
    id: 6,
    title: "Ford Mustang GT",
    price: "$56,270",
    year: 2023,
    mileage: "2,100 miles",
    fuelType: "Gasoline",
    cylinderNumber: 8,
    location: "Dallas, TX",
    features: ["480 HP", "V8 Engine", "Performance Pack", "Track Apps"],
    description: "The Ford Mustang GT continues its muscle car heritage with raw power and modern technology. This example includes the desirable Performance Package for enhanced handling.",
    image: "https://readdy.ai/api/search-image?query=2023%2520Ford%2520Mustang%2520GT%2520in%2520vibrant%2520red%252C%2520professional%2520automotive%2520photography%2520with%2520clean%2520studio%2520background%252C%2520front%2520three-quarter%2520view%2520showing%2520muscular%2520design%252C%2520LED%2520headlights%2520visible%252C%2520premium%2520wheels%252C%2520high-resolution%2520detailed%2520image%2520with%2520perfect%2520lighting&width=600&height=400&seq=car6&orientation=landscape",
    isVerified: true,
    deliveryAvailable: false,
    virtualTour: true
  }
]

const db = sql("vehicles.db");

db.prepare(
  `
   CREATE TABLE IF NOT EXISTS vehicles (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       title TEXT NOT NULL,
       price TEXT NOT NULL,
       year INTEGER NOT NULL,
       mileage TEXT NOT NULL,
       fuelType TEXT NOT NULL,
       cylinderNumber INTEGER NOT NULL,
       location TEXT NOT NULL,
       features TEXT NOT NULL,
       description TEXT NOT NULL,
       image TEXT NOT NULL,
       isVerified INTEGER NOT NULL,
       deliveryAvailable INTEGER NOT NULL,
       virtualTour INTEGER NOT NULL
    )
`
).run();

async function initData() {
  const stmt = db.prepare(`
      INSERT INTO vehicles VALUES (
         null,
         @title,
         @price,
         @year,
         @mileage,
         @fuelType,
         @cylinderNumber,
         @location,
         @features,
         @description,
         @image,
         @isVerified,
         @deliveryAvailable,
         @virtualTour
      )
   `);

  for (const Car of dummyCars) {
    stmt.run(Car);
  }
}

initData()
