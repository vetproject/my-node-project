//

const products = [
    { id: 1, name: 'computer1', category: 'computer' },
    { id: 2, name: 'computer1', category: 'computer' },
    { id: 3, name: 'computer1', category: 'computer' },
    { id: 4, name: 'computer1', category: 'computer' },
    { id: 5, name: 'computer1', category: 'computer' },
]

exports.getAllProducts = (req, res) => {
    res.json(products);
}

exports.getProductById = (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (product) res.json(product);
    else res.status(404).json({ message: "User not found" });
}