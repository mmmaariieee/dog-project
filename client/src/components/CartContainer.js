import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";

function CartContainer({ user }) {
    console.log(user.cart.id)

    const [allInCart, setAllInCart] = useState([])

    useEffect(() => {
        fetch("/cart_dogs")
            .then(r => r.json())
            .then(data => setAllInCart(data.filter((in_cart) => in_cart.cart.id === user.cart.id)))
    }, [setAllInCart]);

    console.log(allInCart)

    let total_price = 0
    const uniqueInCart = []

    const unique = allInCart.filter(in_cart => {
        const isDuplicate = uniqueInCart.includes(in_cart.dog.id)

        if (!isDuplicate) {
            uniqueInCart.push(in_cart.dog.id)
            total_price += in_cart.dog.price
            return true
        }
        return false
    })

    console.log(unique)
    console.log(total_price)

    function handleDelete(in_cart) {
        console.log(in_cart.dog.id)
        fetch(`/dogs/${in_cart.dog.id}/cart_dogs`, {
            method: 'DELETE',
          }).then((r) => {
            if (r.ok) {

                // console.log(in_cart)
                // allInCart.forEach((i) => console.log(i.id))
                // console.log(allInCart.filter((i) => i.id === in_cart.id))
                // console.log(allInCart)
                
                setAllInCart((allInCart) => 
                    allInCart.filter((i) => i.id !== in_cart.id)
                )

                // console.log(allInCart.filter((i) => i.id !== in_cart.cart.id))
                // allInCart.forEach((i) => console.log(i.id))

            }
        }, [])
    }

    return(
        <div className="grid-container">
            {unique.map(in_cart => <div className="card filters" key={in_cart.dog.id}>
                <img src={in_cart.dog.image_url} alt={in_cart.dog.name} />
                <div>
                    <Link className="item-link" to={`/dogs/${in_cart.dog.id}`}>
                        <h2>{in_cart.dog.name}</h2>
                    </Link>
                    <p>{in_cart.dog.location}</p>
                </div>
                <h2>{in_cart.dog.price} $</h2>
                <button className="button" onClick={() => handleDelete(in_cart)} >Delete</button>
            </div>)}
            <h2>Total: {total_price}$</h2>
        </div>
    )
}

export default CartContainer;