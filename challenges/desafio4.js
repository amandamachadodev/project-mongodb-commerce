db.produtos.find({ vendidos: { $gt: 50, $lt: 100 } },
    { vendidos: 1, nome: 1, _id: 0 }).sort({ vendidos: 1 });