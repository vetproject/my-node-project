fetch('http://localhost:3000/api/products')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const container = document.getElementById('views');
        container.innerHTML = ''; // Clear existing content

        // Loop through the products and display them
        data.forEach(product => {
            const div = document.createElement('div');
            div.classList.add('product');
            div.innerHTML = `
            <h3>${product.name}</h3>
            <p>Category: ${product.category}</p>
            <p>ID: ${product.id}</p>
          `;
            container.appendChild(div);
        });
    })
    .catch(error => {
        console.error('Error fetching data:', error);
        document.getElementById('views').innerHTML = '<p style="color:red;">⚠️ Failed to load products.</p>';
    });