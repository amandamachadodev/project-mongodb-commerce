db.produtos.find({ $and: [{ vendidos: { $ne: 50 } }, { tags: { $exists: false } }] },
    { vendidos: 1, nome: 1, _id: 0 });