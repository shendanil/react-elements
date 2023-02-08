import Card from "./Card"
import CardData from "./CardData"


export default function App() {

    const CardElements = CardData.map(item => {
        return <Card
            key = {item.id}
            {...item}
        />
    })

    return (
        <div className="Container">
            {CardElements}
        </div>
    )
}