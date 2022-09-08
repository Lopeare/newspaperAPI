const BASE_URI = `https://chroniclingamerica.loc.gov/search/titles/results/`

export const api = async (terms, page) => {
    const uri = `${BASE_URI}?terms=${terms}&page=${page}&format=json`;
    const res = await fetch(uri)
    return res.json()
} 