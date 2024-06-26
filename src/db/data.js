import { AiFillStar } from "react-icons/ai";

const data = [
  {
    img: "https://m.media-amazon.com/images/I/71VaQ+V6XnL._AC_UY695_.jpg",
    title: "Nike Zoom Freak",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "₹14500",
    newPrice: 12500,
    company: "Nike",
    color: "green",
    category: "sneakers",
  },

  {
    img: "https://m.media-amazon.com/images/I/61-cBsLhJHL._AC_UY695_.jpg",
    title: "Nike Men's Sneaker",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "₹7000",
    newPrice: 6200,
    company: "Adidas",
    color: "blue",
    category: "sneakers",
  },
  {
    img: "https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg",
    title: "Nike Air Monarch IV",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "₹14000",
    newPrice: 12000,
    company: "Nike",
    color: "white",
    category: "sneakers",
  },
  {
    img: "https://m.media-amazon.com/images/I/519MRhRKGFL._AC_UX575_.jpg",
    title: "Nike Air Vapormax Plus",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "₹15000",
    newPrice: 12000,
    company: "Nike",
    color: "red",
    category: "sneakers",
  },

  {
    img: "https://m.media-amazon.com/images/I/51+P9uAvb1L._AC_UY695_.jpg",
    title: "Nike Waffle One Sneaker",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "₹10000",
    newPrice: 8000,
    company: "Nike",
    color: "green",
    category: "sneakers",
  },
  {
    img: "https://m.media-amazon.com/images/I/71oEKkghg-L._AC_UX575_.jpg",
    title: "Nike Running Shoe",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "₹1800",
    newPrice: 1700,
    company: "Adidas",
    color: "black",
    category: "sneakers",
  },
  {
    img: "https://m.media-amazon.com/images/I/41M54ztS6IL._AC_SY625._SX._UX._SY._UY_.jpg",
    title: "Flat Slip On Pumps",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "₹6000",
    newPrice: 4500,
    company: "Vans",
    color: "green",
    category: "flats",
  },
  {
    title: "DSC Belter Cricket Shoes for Mens",
    url: "https://www.amazon.in/dp/B09M8NXFKK",
    company: "DSC",
    star: <AiFillStar className="rating-star" />,
    prevPrice: "₹1500",
    color: "white",
    newPrice: 1200,
    stars: "3.9",
    category: "cricket",
    reviews: "(23 reviews)",
    img: "https://m.media-amazon.com/images/I/41XYw2UIblL._SY395_SX395_.jpg"
  },
  {
    title: "Bersache Sports Shoes for Men",
    url: "https://www.amazon.in/dp/B09ZDP71MB",
    company: "Bersache",
    star: <AiFillStar className="rating-star" />,
    prevPrice: "₹2000",
    category: "sports",
    newPrice: 1700,
    stars: "3.3",
    color: "black",
    reviews: "(12 reviews)",
    img: "https://m.media-amazon.com/images/I/41vPYUJQeuL._SY395_SX395_.jpg"
  },
  {
    title: "Sparx Men's Synthetic Running Shoes",
    url: "https://www.amazon.in/dp/B00IZ963K4",
    company: "SPARX",
    prevPrice: "₹1800",
    star: <AiFillStar className="rating-star" />,
    newPrice: 1600,
    color: "black",
    stars: "4",
    category: "running",
    reviews:"(224 reviews)",
    img: "https://m.media-amazon.com/images/I/51rlCD1qUkL._SY395_SX395_.jpg"
  },
  {
    title: "Sparx Mens Casual Shoe",
    url: "https://www.amazon.in/dp/B07Y5C47JT",
    company: "SPARX",
    prevPrice: "₹1600",
    newPrice: 1100,
    color:"white",
    category: "casual",
    stars: "4.2",
    star: <AiFillStar className="rating-star" />,
    reviews: "(13913 reviews)",
    img: "https://m.media-amazon.com/images/I/31x8oyJlKOL._SX395_SY395_.jpg"
  },
  {
    img: "https://m.media-amazon.com/images/I/71zKuNICJAL._AC_UX625_.jpg",
    title: "Knit Ballet Flat",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "₹3000",
    newPrice: 2500,
    company: "Adidas",
    color: "black",
    category: "flats",
  },

  {
    img: "https://m.media-amazon.com/images/I/61V9APfz97L._AC_UY695_.jpg",
    title: "Loafer Flats",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "₹1400",
    newPrice: 1200,
    company: "Vans",
    color: "white",
    category: "flats",
  },
  {
    img: "https://m.media-amazon.com/images/I/81xXDjojYKS._AC_UX575_.jpg",
    title: "PUMA BLACK-OCE",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "₹4900",
    newPrice: 4500,
    company: "Puma",
    color: "green",
    category: "sneakers",
  },
  {
    img: "https://m.media-amazon.com/images/I/71E75yRwCDL._AC_UY575_.jpg",
    title: "Pacer Future Sneaker",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "₹5000",
    newPrice: 4500,
    company: "Puma",
    color: "red",
    category: "sneakers",
  },
  {
    img: "https://m.media-amazon.com/images/I/71jeoX0rMBL._AC_UX575_.jpg",
    title: "Unisex-Adult Super",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "₹4000",
    newPrice: 3500,
    company: "Puma",
    color: "black",
    category: "sneakers",
  },
  {
    img: "https://m.media-amazon.com/images/I/61TM6Q9dvxL._AC_UX575_.jpg",
    title: "Roma Basic Sneaker",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "₹3000",
    newPrice: 2500,
    company: "Puma",
    color: "white",
    category: "sneakers",
  },
  {
    img: "https://m.media-amazon.com/images/I/7128-af7joL._AC_UY575_.jpg",
    title: "Pacer Future Doubleknit",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "₹4000",
    newPrice: 3500,
    company: "Puma",
    color: "black",
    category: "sneakers",
  },

  {
    img: "https://m.media-amazon.com/images/I/81xXDjojYKS._AC_UX575_.jpg",
    title: "Fusion Evo Golf Shoe",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "₹14000",
    newPrice: 12000,
    company: "Puma",
    color: "green",
    category: "sneakers",
  },
  {
    img: "https://m.media-amazon.com/images/I/719gdz8lsTS._AC_UX575_.jpg",
    title: "Rainbow Chex Skate",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "₹14000",
    newPrice: 12000,
    company: "Vans",
    color: "red",
    category: "flats",
  },
  {
    img: "https://m.media-amazon.com/images/I/71gpFHJlnoL._AC_UX575_.jpg",
    title: "Low-Top Trainers",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "₹11000",
    newPrice: 9000,
    company: "Vans",
    color: "white",
    category: "sandals",
  },
  {
    img: "https://m.media-amazon.com/images/I/71pf7VFs9CL._AC_UX575_.jpg",
    title: "Vans Unisex Low-Top",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "₹4000",
    newPrice: 3500,
    company: "Vans",
    color: "blue",
    category: "sandals",
  },
  {
    img: "https://m.media-amazon.com/images/I/61N4GyWcHPL._AC_UY575_.jpg",
    title: "Classic Bandana Sneakers",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "₹12000",
    newPrice: 10000,
    company: "Nike",
    color: "black",
    category: "sandals",
  },
  {
    img: "https://m.media-amazon.com/images/I/61bncQ44yML._AC_UX695_.jpg",
    title: "Chunky High Heel",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "₹14400",
    newPrice: 12000,
    company: "Vans",
    color: "black",
    category: "heels",
  },
  {
    img: "https://m.media-amazon.com/images/I/71czu7WgGuL._AC_UY695_.jpg",
    title: "Slip On Stiletto High Heel",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "₹5400",
    newPrice: 4500,
    company: "puma",
    color: "black",
    category: "heels",
  },
  {
    img: "https://m.media-amazon.com/images/I/61men05KRxL._AC_UY625_.jpg",
    title: "DREAM PAIRS Court Shoes",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "₹5200",
    newPrice: 4500,
    company: "Nike",
    color: "red",
    category: "heels",
  },
  {
    img: "https://m.media-amazon.com/images/I/519MRhRKGFL._AC_UX575_.jpg",
    title: "Nike Air Vapormax Plus",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "₹4200",
    newPrice: 3900,
    company: "Nike",
    color: "red",
    category: "sneakers",
  },

  {
    img: "https://m.media-amazon.com/images/I/51PGWTXgf-L._AC_UY625_.jpg",
    title: "Low Mid Block Heels",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "₹1400",
    newPrice: 1200,
    company: "Nike",
    color: "black",
    category: "heels",
  },
  {
    img: "https://m.media-amazon.com/images/I/616sA5XUKtL._AC_UY675_.jpg",
    title: "Chunky High Heel",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "₹14000",
    newPrice: 8000,
    company: "Adidas",
    color: "black",
    category: "heels",
  },
  {
    img: "https://m.media-amazon.com/images/I/71h5+MbEK7L._AC_UY625_.jpg",
    title: "Amore Fashion Stilettos",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "₹5000",
    newPrice: 4500,
    company: "Adidas",
    color: "white",
    category: "heels",
  },
  {
    img: "https://m.media-amazon.com/images/I/61uw5RDxKQL._AC_UY625_.jpg",
    title: "Bridal Sandals Glitter",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "₹14000",
    newPrice: 12500,
    company: "Adidas",
    color: "black",
    category: "heels",
  },
  {
    img: "https://m.media-amazon.com/images/I/71yhoZP0l6L._AC_UY695_.jpg",
    title: "Wedding Prom Bridal",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "₹14000",
    newPrice: 12000,
    company: "Adidas",
    color: "black",
    category: "flats",
  },
{
  title: "SPARX Mens Walking Shoe",
  url: "https://www.amazon.in/dp/B08WJ1WW77",
  star: <AiFillStar className="rating-star" />,
  company: "SPARX",
  prevPrice: "₹1700",
  newPrice: 1400,
  category: "walking",
  color:"black",
  stars: "4.1",
  reviews: "(8454 reviews)",
  img: "https://m.media-amazon.com/images/I/31s71z7qRHL._SX395_SY395_.jpg"
},
{
  title: "Sparx Mens Sport_Shoe",
  url: "https://www.amazon.in/dp/B08PWVWKPB",
  star: <AiFillStar className="rating-star" />,
  company: "SPARX",
  prevPrice: "₹1900",
  newPrice: 1600,
  stars: "4.1",
  color:"black",
  category: "sport",
  reviews: "(9184 reviews)",
  img: "https://m.media-amazon.com/images/I/31ibW3kLwJL._SX395_SY395_.jpg"
},
{
  title: "Campus Women's Alexa Running Shoes",
  url: "https://www.amazon.in/dp/B07STYLQRV",
  star: <AiFillStar className="rating-star" />,
  company: "Campus",
  category: "running",
  prevPrice: "₹1200",
  newPrice: 1000,
  color:"black",
  stars: "4.2",
  reviews: "(10443 reviews)",
  img: "https://m.media-amazon.com/images/I/41cSGmH2fpL._SY395_SX395_.jpg"
},
{
  title: "Campus Men's Artemis Running Shoes",
  url: "https://www.amazon.in/dp/B09LR4KJG2",
  company: "Campus",
  star: <AiFillStar className="rating-star" />,
  prevPrice: "₹1300",
  color: "blue",
  newPrice: 1000,
  category: "running",
  stars: "3.9",
  reviews: "(2142 reviews)",
  img: "https://m.media-amazon.com/images/I/41As6FXfvjL._SY395_SX395_.jpg"
},
{
  title: "Liberty Mens Roger-e Sneaker",
  url: "https://www.amazon.in/dp/B0B9ZFPMD9",
  star: <AiFillStar className="rating-star" />,
  company: "Liberty",
  prevPrice: "₹1400",
  newPrice: 1200,
  color : "black",
  stars: "3.7",
  category: "sneakers",
  reviews: "(264 reviews)",
  img: "https://m.media-amazon.com/images/I/31d92YyVi6L._SY395_SX395_.jpg"
},
{
  title: "Bourge Mens Running Shoes",
  url: "https://www.amazon.in/dp/B0C6T16DQ5",
  company: "Bourge",
  prevPrice: "₹1500",
  color: "black",
  star: <AiFillStar className="rating-star" />,
  newPrice: 1300,
  stars: "4",
  category: "running",
  reviews: "(45 reviews)",
  img: "https://m.media-amazon.com/images/I/41u3HZkH4kL._SY395_SX395_.jpg"
},
{
  title: "ATHCO Mens Comfort Shoes",
  url: "https://www.amazon.in/dp/B0CMJGMFPL",
  company: "ATHCO",
  prevPrice: "₹1800",
  newPrice: 1500,
  stars: "3.9",
  star: <AiFillStar className="rating-star" />,
  category: "comfort",
  color:"blue",
  reviews: "(163 reviews)",
  img: "https://m.media-amazon.com/images/I/41nDSe4PLsL._SY395_SX395_.jpg"
},
{
  title: "ASIAN Men's White Casual Sneaker Shoes",
  url: "https://www.amazon.in/dp/B0CVTVT79X",
  company: "ASIAN",
  prevPrice: "₹1700",
  newPrice: 1400,
  star: <AiFillStar className="rating-star" />,
  category: "sneakers",
  color: "white",
  stars: "3.4",
  reviews: "(16 reviews)",
  img: "https://m.media-amazon.com/images/I/41mUOxRogUL._SY395_SX395_.jpg"
},
{
  title: "US Polo Association",
  url: "https://www.amazon.in/dp/B08VWHXJM1",
  company: "U.S. POLO ASSN.",
  prevPrice: "₹2000",
  star: <AiFillStar className="rating-star" />,
  newPrice: 1700,
  color: "white",
  stars: "3.5",
  category: "sneakers",
  reviews: "(495 reviews)",
  img: "https://m.media-amazon.com/images/I/31uHlnPUGML._SY395_SX395_.jpg"
},
{
  title: "SPARX Mens Running Shoes",
  url: "https://www.amazon.in/dp/B08K9Q9HYW",
  company: "SPARX",
  prevPrice: "₹1900",
  star: <AiFillStar className="rating-star" />,
  color: "black",
  category: "running",
  newPrice: 1600,
  stars: "4.1",
  reviews: "(6669 reviews)",
  img: "https://m.media-amazon.com/images/I/41VSl+892YL._SX395_SY395_.jpg"
},
{
  title: "adidas Mens Running Shoe",
  url: "https://www.amazon.in/dp/B0C4DP2N4Q",
  company: "adidas",
  star: <AiFillStar className="rating-star" />,
  prevPrice: "₹2300",
  newPrice: 2000,
  color: "black",
  stars: "4.7",
  category: "running",
  reviews: "(8 reviews)",
  img: "https://m.media-amazon.com/images/I/31Pr8lg0n0L._SY395_SX395_.jpg"
},
{
  title: "Campus Men's Hurricane Running Shoes",
  url: "https://www.amazon.in/dp/B09HCHNNH1",
  company: "Campus",
  prevPrice: "₹1400",
  newPrice: 1200,
  star: <AiFillStar className="rating-star" />,
  stars: "4.1",
  color: "blue",
  category: "running",
  reviews: "(3425 reviews)",
  img: "https://m.media-amazon.com/images/I/413-SFjyr9L._SY395_SX395_.jpg"
},
{
  title: "ASICS Men's Running Shoes",
  url: "https://www.amazon.in/dp/B08BXDQ17C",
  company: "ASICS",
  prevPrice: "₹2100",
  star: <AiFillStar className="rating-star" />,
  newPrice: 1800,
  stars: "4",
  color: "black",
  category: "running",
  reviews: "(4441 reviews)",
  img: "https://m.media-amazon.com/images/I/41KWCFuqJEL._SX395_SY395_.jpg"
},
{
  title: "Nike Mens Revolution 7",
  url: "https://www.amazon.in/dp/B0CL8K38BQ",
  company: "Nike",
  prevPrice: "₹2500",
  star: <AiFillStar className="rating-star" />,
  newPrice: 2200,
  stars: "3.5",
  color:"white",
  category: "running",
  reviews:"(67 reviews)",
  img: "https://m.media-amazon.com/images/I/317hywOOMGL._SY395_SX395_.jpg"
},
{
  title: "Nike Mens Revolution 7 Running Shoe",
  url: "https://www.amazon.in/dp/B0C8TDP3F5",
  company: "Nike",
  prevPrice: "₹2600",
  color: "black",
  category: "running",
  star: <AiFillStar className="rating-star" />,
  newPrice: 2200,
  stars: "4.1",
  reviews: "(11 reviews)",
  img: "https://m.media-amazon.com/images/I/4149M3Nn3VL._SY395_SX395_.jpg"
},
{
  title: "adidas Mens Drogo M Running Shoe",
  url: "https://www.amazon.in/dp/B07M8RXP42",
  company: "adidas",
  prevPrice: "₹1800",
  star: <AiFillStar className="rating-star" />,
  newPrice: 1500,
  stars: "4",
  reviews: "(13239 reviews)",
  color: "white",
  category: "running",
  img: "https://m.media-amazon.com/images/I/31t9fIe2l8L._SX395_SY395_.jpg"
},
{
  title: "Campus Mens City-rideRunning Shoe",
  url: "https://www.amazon.in/dp/B07KX3RFXX",
  company: "Campus",
  prevPrice: "₹1500",
  newPrice: 1200,
  stars: "3.7",
  color: "black",
  category: "running",
  star: <AiFillStar className="rating-star" />,
  reviews: "(3229 reviews)",
  img: "https://m.media-amazon.com/images/I/41GzR4ywL5L._SX395_SY395_.jpg"
},
{
  title: "ASIAN Women's Paradise-01",
  url: "https://www.amazon.in/dp/B0CL515ZZV",
  company: "ASIAN",
  prevPrice: "₹1400",
  newPrice: 1100,
  color: "white",
  category: "sneakers",
  star: <AiFillStar className="rating-star" />,
  stars: "3.7",
  reviews: "(339 reviews)",
  img: "https://m.media-amazon.com/images/I/41cEW8WuMuL._SY395_SX395_.jpg"
},
{
  title: "SPARX Mens Sm-680 Industrial Shoe",
  url: "https://www.amazon.in/dp/B098B7QQ8Y",
  company: "SPARX",
  prevPrice: "₹1800",
  newPrice: 1500,
  stars: "4",
  star: <AiFillStar className="rating-star" />,
  reviews: "(2296 reviews)",
  color: "grey",
  category: "industrial",
  img: "https://m.media-amazon.com/images/I/4120Zi2ml6L._SX395_SY395_.jpg"
}
];

export default data;
