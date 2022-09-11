db.produtos.updateMany({ $or: [{ nome: "Big Mac" }, { nome: "Quarteirão com Queijo" }] },
    { $push: { ingredientes: "bacon" } });
db.produtos.find({}, { ingredientes: 1, nome: 1, _id: 0 });