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

const Order = mongoose.model("Order", orderSchema);
const Customer = mongoose.model("Customer", customerSchema);

// const findCustomer = async () => {
//   let result = await Customer.find({}).populate("orders");
//   console.log(result[0]);
// };

// const addCustomers = async () => {
//   let cust1 = new Customer({
//     name: "Gaurav Pawar",
//   });

//   let order1 = await Order.findOne({ item: "Chips" });
//   let order2 = await Order.findOne({ item: "Vada Pav" });

//   cust1.orders.push(order1);
//   cust1.orders.push(order2);

//   let result = await cust1.save();
//   console.log(result);
// };

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

// addOrders();
// addCustomers();
// findCustomer();
