import React from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { Alert } from "react-bootstrap";

const Cart = () => {
  const dispatch = useDispatch();

  const { cartData, getItemCart } = useSelector((state) => state.cart);

  useEffect(()=>{
    dispatch(getItemApi());
    return ()=>{};
  },[]);

  //* this is we converting the data from number  from in variable total1 with the help of 'reducer'

  let total1=cartData.reducer((acu,el)=>Number(acu)+Number(el.price)*Number(el.quality),0);

  if(getItemCart.loading){
    return (
      <div>
        <Progress size='lg' isIndeterminate />
      </div>
    );
  }else if(getItemCart.error){
    return(
      <div>
        <Stack spacing={3}>
          <Alert status="error">
            <AlertIcon />
            There was error processing your request
          </Alert>
        </Stack>
      </div>
    );
  }else if(cartData.length===0){
    return <div>Your bag is empty</div>;
  }else{
    return (
      <div className={styles.bigDiv}>
        <div className={styles.mainDiv}>
          <div  className={styles.leftDiv}>
            <div  className={styles.leftDivOne}>
              <h1 className={styles.bag}>
                    MY BAG
              </h1>
              <p className={styles.reserved}>
                      Items are reserved for 60 minutes
              </p>
            </div>
            <div className={styles.leftDivTowUper}>
              {cartData.map((el)=>(
                <CartItem key={el.id} item={el} />
              ))}
            </div>
            <div className={styles.leftDivThree}>
                <h2 className={styles.subPrice}>
                  {`£${total1.toFixed(2)}`}
                </h2>
                <h2 className={styles.subPrice}>
                  SUB - TOTAL
                </h2>
            </div>
            <div className={styles.delivery}>
              <img 
              className={styles.iconD}
              src='https://cdn-icons-png.flaticon.com/512/3233/3233997.png' alt='cart'
              />
              <div className={styles.insideDelivery}>
                <h1 className={styles.free}>
                      FREE*STANDARD DELIVERY
                </h1>
                <p className={styles.country}>
                  Fast delivery optional available to most countries.
                </p>
                <p className={styles.more1}>
                  Mores info
                </p>
              </div>
            </div>
          </div>
          <div className={styles.rightDiv1}>
              <h1 className={styles.total}>
                TOTAL
              </h1>
              <div className={styles.subTotal}>
                <h2 className={styles.sub_total}>
                  Sub-total
                </h2>
                <p>
                {`£${total1.toFixed(2)}`}
                </p>
              </div>
              <div className={styles.dCharge}>
                <h2 className={styles.sub_total}>Delivery</h2>
                <p className={styles.pCharge}>
                  !
                </p>
              </div>
              <Link to={"/checkoutpage"}>
                <button className={styles.btnCheckout}>
                  CHECKOUT
                </button>
              </Link>
              <div className={styles.accept}>
                <h2 className={styles.weAc}>
                  WE ACCEPT:
                </h2>
                <div className={styles.card}>
                  <img 
                  className={styles.cardImg}
                  src='https://assets.asosservices.com/asos-finance/images/marketing/single.png'
                  alt='visa'
                  />
                </div>
                <p className={styles.step}>
                  Got a discount code? Add it the next step.
                </p>
              </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Cart;