import React, { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import * as BiIcons from 'react-icons/bi'
import products from "./../../data/products.json"


const Card = () => {
const [product, setProducts] = useState(products);
const [items, setItems] = useState(product[0]);
const [visible, setVisible] = useState(false);
const [value, setValue] = useState();
const [mainImage, setMainImage] = useState("");

const handleClick = (value) => {
  setValue(value);
  setVisible(true);
  setItems(products[value-1]);
};

useEffect(()=>{
  if (visible){
    handleClick(value);
    setMainImage(items.image[0]);
  }
},[visible])

console.log(items)
    return (
        <div>
         <ul className="gallery" >
           {product && product.map(({name,image, discount, price, discountedPrice, rating, id})=>(
             <li onClick={() => handleClick(id)} className="card__li" key={id}>
             <div className="card__upper" >
               <div className="card__image">
                  <img className="image" src={image[0]}/>
               </div>
               <div className="card__badge">
                 <p className="card__discount">{discount}</p>
               </div>
               <BiIcons.BiHeart style={{
                 position: "absolute",
                  right: 20,
                  top: 15,}}/>
             </div>
             <div className="card__lower">
              <div className="card__body">
               <h3 className="card__name">{name}</h3>
               <div className="card__price">
                 <p className="discountedPrice__values">{discountedPrice}</p>
                 <p className="price__values">{price}</p>
               </div>
              </div>
              {/* <div className="card__options">
                <ul className="card__colors">
                  {product && product.map(({colors,id})=>(
                    <li className="color__options" key={id}>
                      <div className="colors__color" style={{display:"flex", backgroundColor:{colors}}}></div>
                    </li>
                  ))}
                </ul>
              </div> */}
              <div className="card__details">
                <div className="product__ratings">
                  <BiIcons.BiStar style={{fontSize:"20px", marginRight:"4px"}}/>
                  <p className="ratings__values">{rating}</p>
                </div>
                <button className="card__button">
                  <div className="card__cart">
                    <p style={{marginBottom:"0px"}}>BUY</p>
                    <BiIcons.BiPlus style={{fontSize: "20px"}} />
                  </div>
                </button> 
              </div>
             </div>
             </li>
           ))}
        </ul>
        <Modal
          size="lg"
          show={visible}
          onHide={() => setVisible(false)}
          dialogClassName="modal-90w"
        >
          <Modal.Body>
            <div className="modal__image">
              <div className="modal__gallery">
                <ul className="modal__gallery-image">
                  {items && items.image.map((s,id)=>(
                    <li className="" key={id}>
                      <div className="small__image">
                        <img className="preview__image" src={s}/>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="modal__potrait">
                  <div className="main__image">
                    <img className="selected__image" src={mainImage}/>
                  </div>
                </div>
              </div>
              <div className="modal__details">
                <div className="modal__rating">
                  <div className="modal__badge">
                    <p className="card__discount">{items.discount}</p>
                  </div>
                  <div className="product__ratings">
                    <BiIcons.BiStar style={{fontSize:"20px", marginRight:"4px"}}/>
                    <p className="ratings__values">{items.rating}</p>
                  </div>
                </div>
                <div className="modal__desc">
                    <h3>{items.name}</h3>
                    <p className="modal__label">
                      SKU: {" "}
                      <strong className="modal__sku">{items.sku}</strong>
                    </p>
                    <p className="modal__label">
                      Brand: {" "}
                      <strong className="modal__brandname">{items.brandname}</strong>
                    </p>
                </div>
                <div className="modal__price">
                  <p className="discountedPrice__values">{items.discountedPrice}</p>
                  <p className="price__values" style={{paddingLeft:"8px", fontSize:"10px"}}>{items.price}</p>
                </div>
                <div className="modal__quantity">
                  <p className="modal__number">Quantity</p>
                  <div className="modal__input">
                    <input/>
                    <BiIcons.BiMinus className="modal__button-icon"/>
                    <BiIcons.BiPlus className="modal__button-icon"/>
                  </div>
                </div>
                <div style={{display:"flex"}}>
                <button className="modal__button-light">
                  <div className="card__cart">
                    <p style={{marginBottom:"0px"}}>Add to Cart</p>
                  </div>
                </button>
                <button className="modal__button-dark">
                  <div className="card__cart">
                    <p style={{marginBottom:"0px"}}>Buy Now</p>
                  </div>
                </button> 
                </div>
              </div>
            </div>
          </Modal.Body>
        </Modal>
        </div>
    )
}

export default Card
