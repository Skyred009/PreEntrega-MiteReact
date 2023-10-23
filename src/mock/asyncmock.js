const products =
    [{
      id: "0",
      category: "Inicio",
      name: "Combo de agenda + taza",
      price: 10,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
      stock: 20,
      img: "/img/Agenda + taza.png",
      },
      {
      id: "1",
      category: "Inicio",
      name: "Cuaderno",
      price: 15,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
      stock: 30,
      img: "/img/Cuaderno.png"
      },
      {
      id: "2",
      category: "Inicio",
      name: "agenda 100 hojas ",
      price: 18,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
      stock: 30,
      img: "/img/Agenda.png"
      },
      {
      id: "3",
      category: "Inicio",
      name: "Agenda mi dia",
      price: 20,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
      stock: 5,
      img: "/img/Mi dia.png"
      },
      {
      id: "4",
      category: "Inicio",
      name: "Agenda diario",
      price: 17,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
      stock: 50,
      img: "/img/Diario.png"
      },
      {
      id: "5",
      category: "Inicio",
      name: "Agenda combo",
      price: 23,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
      stock: 40,
      img: "/img/combo 2.png"
      },
      {
      id: "6",
      category: "Cuaderno",
      name: "Cuaderno 100 hojas",
      price: 15,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
      stock: 30,
      img: "/img/combo 2.png"
      },
      {
      id: "7",
      category: "Cuaderno",
      name: "Cuaderno 100 hojas",
      price: 15,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
      stock: 30,
      img: "/img/Cuaderno.png"
      },
      {
      id: "8",
      category: "Cuaderno",
      name: "Cuaderno 100 hojas",
      price: 15,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
      stock: 30,
      img: "/img/Cuaderno.png"
      },
      {
      id: "9",
      category: "Combo",
      name: "Agenda + taza",
      price: 15,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
      stock: 30,
      img: "/img/Combo 2.png"
      },
      {
      id: "10",
      category: "Combo",
      name: "Agenda + taza",
      price: 140377,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
      stock: 20,
      img: "/img/Combo 2.png"
      },
      {
      id: "11",
      category: "Combo",
      name: "Agenda + taza",
      price: 140377,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
      stock: 20,
      img: "/img/Combo 2.png"
      }]

export const getProducts = () =>  {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        },100)
    })
}

export const getProductById = (id) => {
    return new Promise(resolve => {
      setTimeout(() => {
          console.log(products);
          const product = products.find(prod => prod.id === id);
          console.log("product", typeof(id),id)
          resolve(product);
        },100)
    })
}

export const getProductsByCategory = (category) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productsByCategory = products.filter(prod => prod.category === category);
            resolve(productsByCategory);
        })
    })
}