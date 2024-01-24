export default function ProductCard() {
    return (
        <div className="card position-relative">
            <a href="single-product.html">
                <img src="assets/item2.jpg" className="img-fluid rounded-4" alt="product" />
            </a>
            <div className="card-body p-0">
                <a href="single-product.html">
                    <h3 className="card-title pt-4 m-0">Grey hoodie</h3>
                </a>

                <div className="card-text">
                    <span className="rating secondary-font">
                        stars
                        5.0</span>

                    <h3 className="secondary-font text-primary">$18.00</h3>

                    <div className="d-flex flex-wrap mt-3">
                        <a href="/" className="btn-cart me-3 px-4 pt-3 pb-3">
                            <h5 className="text-uppercase m-0">Add to Cart</h5>
                        </a>
                        <a href="/" className="btn-wishlist px-4 pt-3 ">
                            heart
                        </a>
                    </div>

                </div>

            </div>
        </div>
    )
}