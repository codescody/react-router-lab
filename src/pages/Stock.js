import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { get } from "mongoose"

const Stock = (props) => {
    const apiKey= '33008c923ed97c3e91788be04518ade5'
    const params = useParams()
    const symbol = params.symbol
    const url = `https://financialmodelingprep.com/api/v3/quote/${symbol}?apikey=${apiKey}`
    
    const [stock, setStock] = useState(undefined)

    const getStock = async () => {
        const response = await fetch(url)
        const data = await response.json()
        setStock(data)
    }
    useEffect(() => {
        getStock()
    }, [])

    return (
        <div className="Stock">
            {!stock ? <h1>loading</h1> :
            <div>
                <h2>{stock[0].name}</h2>
                <h2>{stock[0].price}</h2>
            </div>
            }
        </div>
    )
}

export default Stock