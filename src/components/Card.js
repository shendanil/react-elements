function Card(props) {
    console.log(props.openSpots)
    let statusText
    if (props.openSpots === 0) {
        statusText = "SOLD OUT"
    } else if (props.location === "Online") {
        statusText = "ONLINE"
    }
    
    return (
        <div className="Card">
            {statusText && <p className="Status">{statusText}</p>}
            <img alt='' src={props.img} />
            <div className="Description">
                <p>
                    <span className="Star">★ </span>
                    <span className="Review">{props.review} </span>
                    <span className="ReviewCount">({props.review_count}) • </span>
                    <span className="Location">{props.location}</span>
                </p>
                <p>{props.desc}</p>
                <p><span className="Bold">From ${props.price}</span> / person</p>
            </div>
        </div>
    )
}

export default Card