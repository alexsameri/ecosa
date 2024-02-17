const fetchphotos = async () => {
    const loadphotos = await fetch('https://jsonplaceholder.typicode.com/photos/')
    const response = await loadphotos.json()
    console.log(response)

    return response
}
fetchphotos()