var axios = require("axios");

var data = JSON.stringify({
  title: "Puma Jeans3",
  desc: "test",
  img: "test",
  categories: ["tshirt", "men", "women"],
  size: ["xl"],
  color: ["red"],
  price: "5000",
});

var config = {
  method: "post",
  url: "http://localhost:5000/api/products",
  headers: {
    token: "Bearer PLACE_TOKEN_HERE",
    "Content-Type": "application/json",
  },
  data: data,
};

axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
