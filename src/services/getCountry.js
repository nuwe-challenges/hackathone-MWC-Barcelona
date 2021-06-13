import axios from "axios"

export async function getCountry() {
    const request = await axios.get('https://restcountries.eu/rest/v2/all')
    const { data } = await request
    return data
}