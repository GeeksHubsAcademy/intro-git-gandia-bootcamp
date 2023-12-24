fetchEntrantes = async () => {
    const res =  await fetch('https://planetothebrain.com/ilborsalino/v1/menu-category-dishes/?category=entrantes')
    console.log(res)
    const jsonData = await res.json()
    console.log(jsonData)
    return jsonData

}
fetchSartenes = async () => {
    return await fetch('https://planetothebrain.com/ilborsalino/v1/menu-category-dishes/?category=sartenes').json()

}
fetchEnsaladas = async () => {
    return await fetch('https://planetothebrain.com/ilborsalino/v1/menu-category-dishes/?category=ensaladas').json()

}
fetchCarnes = async () => {
    return await fetch('https://planetothebrain.com/ilborsalino/v1/menu-category-dishes/?category=carnes').json()

}
fetchPescados = async () => {
    return await fetch('https://planetothebrain.com/ilborsalino/v1/menu-category-dishes/?category=pescados').json()

}
fetchPastas = async () => {
    return await fetch('https://planetothebrain.com/ilborsalino/v1/menu-category-dishes/?category=pastas').json()

}
fetchPizzas = async () => {
    return await fetch('https://planetothebrain.com/ilborsalino/v1/menu-category-dishes/?category=pizzas').json()
}
fetchRisottos = async () => {
    return await fetch('https://planetothebrain.com/ilborsalino/v1/menu-category-dishes/?category=risottos').json()

}
fetchVeganeandos = async () => {
    return await fetch('https://planetothebrain.com/ilborsalino/v1/menu-category-dishes/?category=veganeando').json()
}