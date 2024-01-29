import './footer.css'

export default function Footer(){
    return(
        <footer className="footer">
            <div className="features">
                <div className="ft">
                    <h1>Free Shipping</h1>
                    <p>Any purchase above Rp 500.000</p>

                </div>
                <div className="ft">
                    <h1>Can pay on the spot</h1>
                    <p>Maximum purchase IDR 8,000,000</p>


                </div>
                <div className="ft">
                    <h1>Originial Products</h1>
                    <p>100% guarantee of original products and quality</p>


                </div>
                <div className="ft">
                    <h1>Installment Without Credit Card</h1>
                    <p>Get through the BRI Ceria application</p>

                    
                </div>
            </div>
            <div className="footername">
                <div className="ds">
                    <h1>Support</h1>
                    <p>FAQ</p>
                    <p>Troubleshooting</p>
                    <p>Repair center premises</p>
                </div>
                <div className="ds">
                <h1>About</h1>
                <p>Our Brand</p>
                <p>Newsroom</p>
                <p>Shop</p>
                </div>
                <div className="ds2">
                    <h1>Contact Us</h1>
                    <p>service.id@realme.com</p>
                    <img src="../src/img/insta.svg" alt="" className="insta" />
                    <img src="../src/img/facebook.svg" alt="" />
                    <img src="../src/img/twitter.svg" alt="" />
                </div>
                <div className="ds3">
                    <img src="../src/img/logo-realme.svg" alt="" />
                    <p>
                    "Realme-Connecting Dreams, Changing Lives" 
                    </p>
                </div>
            </div>
        </footer>
    )
}