import "./card.css"

type CardProps = {
    id:string,
    name:string,
    imageUrl:string,
    title:string,
    price:string,



}




export default function Card({id,  imageUrl, name, title, price}:CardProps){
    return(
        <div className="card11" key={id}>
            <img src={imageUrl} alt="" />
            <h1>{name}</h1>
            <p className="title">{title}</p>
            <p className="price">{price}</p>
            <button className='c33btn'>Specification Check</button>
        </div>
    )

}