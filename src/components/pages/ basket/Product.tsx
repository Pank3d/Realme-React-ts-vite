import { useMobXStore } from "../../store/context"
import "./Product.css"
import { observer } from "mobx-react-lite"




 const  Product = observer(() => {
  const counter = useMobXStore()
  console.log(counter.count)
    
  return (
    <div className="schetchik">
      <div className="counter">{counter.count}</div>
      <button onClick={() => counter.plus()} className="btnpl">
        +
      </button>
      <button onClick={() => counter.minus()} className="btnMin">
        -
      </button>
    </div>
  );
})

export default Product 


/* 
export default function Product(
  id: string,
  img: string,
  price: string,
  title: string,
  conf: string,
  color: string,
) {
  return (
    <div className="Product" key={id}>
      <input type="checkbox" className="chekboxBy" />
      <img src={img} />
      <div className="ProductName">
        <h1 className="titleProduct">{title}</h1>
        <p className="colorProduct">{color}</p>
        <p className="confProduct">{conf}</p>
      </div>
       <div className="schetchik">
      <div className="counter">{counter.count}</div>
      <button onClick={() => counter.plus()} className="btnpl">
        +
      </button>
      <button onClick={() => counter.minus()} className="btnMin">
        -
      </button>
    </div>
  );
      <div className="counter">{counter.count}</div>
      <button onClick={() => counter.plus()} className="btnpl">
        +
      </button>
      <button onClick={() => counter.minus()} className="btnMin">
        -
      </button>
    </div>
      <div className="TotaLprice">{price}</div>
    </div>
  );
}
 
*/