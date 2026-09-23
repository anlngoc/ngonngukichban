const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

const products = [
  {
    name: "Son môi itachi",
    price: "500.000đ",
    oldPrice: "600.000đ",
    badge: "-17%",
    image: "/images/product1.jpg"
  },
  {
    name: "Mascara dày và cong",
    price: "50.000đ",
    oldPrice: "100.000đ",
    badge: "-50%",
    image: "/images/product2.jpg"
  },
  {
    name: "Son môi TPA-115",
    price: "125.000đ",
    oldPrice: "250.000đ",
    badge: "-50%",
    image: "/images/product3.jpg"
  },
  {
    name: "Son bóng hồng",
    price: "100.000đ",
    oldPrice: "200.000đ",
    badge: "-50%",
    image: "/images/product4.jpg"
  },
  {
    name: "Nước làm trắng da SG",
    price: "200.000đ",
    oldPrice: "",
    badge: "HOT",
    image: "/images/product5.jpg"
  },
  {
    name: "Phấn trang điểm AUG",
    price: "400.000đ",
    oldPrice: "450.000đ",
    badge: "-11%",
    image: "/images/product6.jpg"
  }
];

const categories = [
  "Tất cả",
  "Kem dưỡng ẩm",
  "Son môi",
  "Sơn móng tay",
  "Trang điểm",
  "Dưỡng tóc"
];

app.get("/", (req, res) => {
  res.render("index", {
    products,
    categories,
    selectedCategory: "Tất cả"
  });
});

app.get("/category/:name", (req, res) => {
  const name = decodeURIComponent(req.params.name);
  res.render("index", {
    products,
    categories,
    selectedCategory: name
  });
});

app.listen(PORT, () => {
  console.log(`Server running: http://localhost:${PORT}`);
});
