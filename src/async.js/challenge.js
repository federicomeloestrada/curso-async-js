import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

async function fethcData(urlApi) {
    const response = await fetch(urlApi);
    const data = await response.json();
    return data;
}

const anotherFn = async (urlApi) => {
    try {
        const products = await fethcData(`${urlApi}/products`);
        const product = await fethcData(`${urlApi}/products/${products[0].id}`);
        const category = await fethcData(`${urlApi}/categories/${product.category.id}`);
        console.log(products[0]);
        console.log(product.title);
        console.log(category.name);        
    } catch (error) {
        console.log(error);
    }
}

anotherFn(API);




async function runCode() {
    // Tu código aquí 👈
    const url = 'https://domain-api-com';
    try {
      const con = await fetch(url);
    } catch {
      throw new Error('API Not Found');
    }
  }
runCode();
