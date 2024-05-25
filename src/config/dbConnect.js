import mongoose from "mongoose";

mongoose.connect("mongodb+srv://lav123:lav123@cluster0.rwzvsqi.mongodb.net/livraria?retryWrites=true&w=majority");

let db = mongoose.connection;

export default db;