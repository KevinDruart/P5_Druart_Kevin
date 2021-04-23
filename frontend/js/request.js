const getRequest = async (url) => {
    const response = await fetch(url);
    return await response.json();
}


const url = "http://localhost:3000/api/teddies";