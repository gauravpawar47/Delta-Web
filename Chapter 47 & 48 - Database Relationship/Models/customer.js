const mongoose = require("mongoose");
const { Schema } = mongoose;

main()
  .then(() => console.log("Connection Successful !"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

const orderSchema = new Schema({
  item: String,
  price: Number,
});

const customerSchema = new Schema({
  name: String,
  orders: [
    {
      type: Schema.Types.ObjectId,
      ref: "Order",
    },
  ],
});

// customerSchema.pre("findOneAndDelete", async() => {
//   console.log("PRE MIDDLEWARE");
// })

customerSchema.post("findOneAndDelete", async (cust) => {
  if (cust.orders.length) {
    let response = await Order.deleteMany({ _id: { $in: cust.orders } });
    console.log(response);
  }
});

const Order = mongoose.model("Order", orderSchema);
const Customer = mongoose.model("Customer", customerSchema);

// const findCustomer = async () => {
//   let result = await Customer.find({}).populate("orders");
//   console.log(result[0]);
// };

customerSchema.post("findOneAndDelete", async (data) => {
  console.log(data);
});

const addCustomers = async () => {
  let newCust = new Customer({
    name: "Ramesh Kumar",
  });

  let newOrder = new Order({
    item: "Pizza",
    price: 250,
  });

  newCust.orders.push(newOrder);
  await newOrder.save();
  await newCust.save();

  console.log("New Customer Added");
};

// const addOrders = async () => {
//   let res = await Order.insertMany([
//     {
//       item: "Samosa",
//       price: 12,
//     },
//     {
//       item: "Chips",
//       price: 20,
//     },
//     {
//       item: "Vada Pav",
//       price: 15,
//     },
//   ]);

//   console.log(res);
// };

const delCust = async () => {
  let data = await Customer.findOneAndDelete({
    _id: "67fc82f96e22925107ce9aae",
  });
  console.log(data);
};

// addOrders();
// addCustomers();
// findCustomer();
delCust();
