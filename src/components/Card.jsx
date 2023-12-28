const Card = ({ image, text }) => {
    return (
    <>
    <div className="card">
        <img src={image} alt="card" />
        <p className="cardTitle">{text}</p>
    </div>
    </>
    )
}
export default Card
