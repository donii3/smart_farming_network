import Image from "next/image";
import Link from "next/link";

export default function MarketPlacePage() {
    return (
        <div>
            
            <div className="breadcrumb-area text-center shadow dark-hard bg-cover text-light" style={{backgroundImage: "url('/assets/img/4.jpeg')"}} >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <h1>Products</h1>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li><Link href="/"><i className="fas fa-home"></i> Home</Link></li>
                                    <li className="active">Shop</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="validtheme-shop-area default-padding">
                <div className="container">
                    <div className="shop-listing-contentes">

                        <div className="row item-flex center">

                            <div className="col-lg-7">
                                <div className="content">
                                    <nav>
                                        <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                            <button className="nav-link active" id="grid-tab-control" data-bs-toggle="tab" data-bs-target="#grid-tab" type="button" role="tab" aria-controls="grid-tab" aria-selected="true">
                                                <i className="fas fa-th-large"></i>
                                            </button>

                                            <button className="nav-link" id="list-tab-control" data-bs-toggle="tab" data-bs-target="#list-tab" type="button" role="tab" aria-controls="list-tab" aria-selected="false">
                                                <i className="fas fa-th-list"></i>
                                            </button>
                                        </div>
                                    </nav>
                                </div>
                            </div>

                            <div className="col-lg-5 text-right">
                                <p>
                                    Showing 1–10 of 47 results
                                </p>
                                <select name="cars" id="cars">
                                    <option value="volvo">Short by latest</option>
                                    <option value="saab">Short by Recent</option>
                                    <option value="mercedes">Short by Popular</option>
                                    <option value="audi">Short by Relevant</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="tab-content tab-content-info text-center" id="shop-tabContent">

                                <div className="tab-pane fade show active" id="grid-tab" role="tabpanel" aria-labelledby="grid-tab-control">
                                    <ul className="vt-products columns-4">

                                        <li className="product">
                                            <div className="product-contents">
                                                <div className="product-image">
                                                    <Link href="shop-single.html">
                                                        <Image width={100} height={100} src="/assets/img/products/1.png" alt="Product" />
                                                    </Link>
                                                    <div className="shop-action">
                                                        <ul>
                                                            <li className="cart">
                                                                <Link href="#"><span>Add to cart</span></Link>
                                                            </li>
                                                            <li className="wishlist">
                                                                <Link href="#"><span>Add to wishlist</span></Link>
                                                            </li>
                                                            <li className="quick-view">
                                                                <Link href="#"><span>Quick view</span></Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="product-caption">
                                                    <div className="product-tags">
                                                        <Link href="#">Crop</Link>
                                                        <Link href="#">Organic</Link>
                                                    </div>
                                                    <h4 className="product-title">
                                                        <Link href="shop-single.html">Strawberry</Link>
                                                    </h4>
                                                    <div className="price">
                                                        <span>$12.00</span>
                                                    </div>
                                                    <Link href="#" className="cart-btn"><i className="fas fa-shopping-bag"></i> Add to cart</Link>
                                                </div>
                                            </div>
                                        </li>
                                        
                                        <li className="product">
                                            <div className="product-contents">
                                                <div className="product-image">
                                                    <span className="onsale">Sale!</span>
                                                    <Link href="shop-single.html">
                                                        <Image width={100} height={100} src="/assets/img/products/2.png" alt="Product" />
                                                    </Link>
                                                    <div className="shop-action">
                                                        <ul>
                                                            <li className="cart">
                                                                <Link href="#"><span>Add to cart</span></Link>
                                                            </li>
                                                            <li className="wishlist">
                                                                <Link href="#"><span>Add to wishlist</span></Link>
                                                            </li>
                                                            <li className="quick-view">
                                                                <Link href="#"><span>Quick view</span></Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="product-caption">
                                                    <div className="product-tags">
                                                        <Link href="#">Vegetables</Link>
                                                        <Link href="#">Winter</Link>
                                                    </div>
                                                    <h4 className="product-title">
                                                        <Link href="shop-single.html">Organic Carrot</Link>
                                                    </h4>
                                                    <div className="price">
                                                        <span><del>$8.00</del></span>
                                                        <span>$5.00</span>
                                                    </div>
                                                    <Link href="#" className="cart-btn"><i className="fas fa-shopping-bag"></i> Add to cart</Link>
                                                </div>
                                            </div>
                                        </li>
                                        
                                        <li className="product">
                                            <div className="product-contents">
                                                <div className="product-image">
                                                    <Link href="shop-single.html">
                                                        <Image width={100} height={100} src="/assets/img/products/3.png" alt="Product" />
                                                    </Link>
                                                    <div className="shop-action">
                                                        <ul>
                                                            <li className="cart">
                                                                <Link href="#"><span>Add to cart</span></Link>
                                                            </li>
                                                            <li className="wishlist">
                                                                <Link href="#"><span>Add to wishlist</span></Link>
                                                            </li>
                                                            <li className="quick-view">
                                                                <Link href="#"><span>Quick view</span></Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="product-caption">
                                                    <div className="product-tags">
                                                        <Link href="#">Fruits</Link>
                                                        <Link href="#">Juicy</Link>
                                                    </div>
                                                    <h4 className="product-title">
                                                        <Link href="shop-single.html">Fresh Red Seedless</Link>
                                                    </h4>
                                                    <div className="price">
                                                        <span>$14.00</span>
                                                    </div>
                                                    <Link href="#" className="cart-btn"><i className="fas fa-shopping-bag"></i> Add to cart</Link>
                                                </div>
                                            </div>
                                        </li>
                                        
                                        <li className="product">
                                            <div className="product-contents">
                                                <div className="product-image">
                                                    <Link href="shop-single.html">
                                                        <Image width={100} height={100} src="/assets/img/products/4.png" alt="Product" />
                                                    </Link>
                                                    <div className="shop-action">
                                                        <ul>
                                                            <li className="cart">
                                                                <Link href="#"><span>Add to cart</span></Link>
                                                            </li>
                                                            <li className="wishlist">
                                                                <Link href="#"><span>Add to wishlist</span></Link>
                                                            </li>
                                                            <li className="quick-view">
                                                                <Link href="#"><span>Quick view</span></Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="product-caption">
                                                    <div className="product-tags">
                                                        <Link href="#">Fruits</Link>
                                                        <Link href="#">Juicy</Link>
                                                    </div>
                                                    <h4 className="product-title">
                                                        <Link href="shop-single.html">Organic Sweet Corn</Link>
                                                    </h4>
                                                    <div className="price">
                                                        <span>$8.00</span>
                                                    </div>
                                                    <Link href="#" className="cart-btn"><i className="fas fa-shopping-bag"></i> Add to cart</Link>
                                                </div>
                                            </div>
                                        </li>
                                        
                                        <li className="product">
                                            <div className="product-contents">
                                                <div className="product-image">
                                                    <Link href="shop-single.html">
                                                        <Image width={100} height={100} src="/assets/img/products/5.png" alt="Product" />
                                                    </Link>
                                                    <div className="shop-action">
                                                        <ul>
                                                            <li className="cart">
                                                                <Link href="#"><span>Add to cart</span></Link>
                                                            </li>
                                                            <li className="wishlist">
                                                                <Link href="#"><span>Add to wishlist</span></Link>
                                                            </li>
                                                            <li className="quick-view">
                                                                <Link href="#"><span>Quick view</span></Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="product-caption">
                                                    <div className="product-tags">
                                                        <Link href="#">Fish</Link>
                                                        <Link href="#">Health</Link>
                                                    </div>
                                                    <h4 className="product-title">
                                                        <Link href="shop-single.html">Fresh Fish</Link>
                                                    </h4>
                                                    <div className="price">
                                                        <span>$25.00</span>
                                                    </div>
                                                    <Link href="#" className="cart-btn"><i className="fas fa-shopping-bag"></i> Add to cart</Link>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="product">
                                            <div className="product-contents">
                                                <div className="product-image">
                                                    <Link href="shop-single.html">
                                                        <Image width={100} height={100} src="/assets/img/products/6.png" alt="Product" />
                                                    </Link>
                                                    <div className="shop-action">
                                                        <ul>
                                                            <li className="cart">
                                                                <Link href="#"><span>Add to cart</span></Link>
                                                            </li>
                                                            <li className="wishlist">
                                                                <Link href="#"><span>Add to wishlist</span></Link>
                                                            </li>
                                                            <li className="quick-view">
                                                                <Link href="#"><span>Quick view</span></Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="product-caption">
                                                    <div className="product-tags">
                                                        <Link href="#">Seasonal</Link>
                                                        <Link href="#">Fruit</Link>
                                                    </div>
                                                    <h4 className="product-title">
                                                        <Link href="shop-single.html">Fresh Bananah</Link>
                                                    </h4>
                                                    <div className="price">
                                                        <span><del>$18.00</del></span>
                                                        <span>$13.00</span>
                                                    </div>
                                                    <Link href="#" className="cart-btn"><i className="fas fa-shopping-bag"></i> Add to cart</Link>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="product">
                                            <div className="product-contents">
                                                <div className="product-image">
                                                    <Link href="shop-single.html">
                                                        <Image width={100} height={100} src="/assets/img/products/7.png" alt="Product" />
                                                    </Link>
                                                    <div className="shop-action">
                                                        <ul>
                                                            <li className="cart">
                                                                <Link href="#"><span>Add to cart</span></Link>
                                                            </li>
                                                            <li className="wishlist">
                                                                <Link href="#"><span>Add to wishlist</span></Link>
                                                            </li>
                                                            <li className="quick-view">
                                                                <Link href="#"><span>Quick view</span></Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="product-caption">
                                                    <div className="product-tags">
                                                        <Link href="#">Seasonal</Link>
                                                        <Link href="#">Vegetables</Link>
                                                    </div>
                                                    <h4 className="product-title">
                                                        <Link href="shop-single.html">Organic Cucumber</Link>
                                                    </h4>
                                                    <div className="price">
                                                        <span>$3.00</span>
                                                    </div>
                                                    <Link href="#" className="cart-btn"><i className="fas fa-shopping-bag"></i> Add to cart</Link>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="product">
                                            <div className="product-contents">
                                                <div className="product-image">
                                                    <Link href="shop-single.html">
                                                        <Image width={100} height={100} src="/assets/img/products/8.png" alt="Product" />
                                                    </Link>
                                                    <div className="shop-action">
                                                        <ul>
                                                            <li className="cart">
                                                                <Link href="#"><span>Add to cart</span></Link>
                                                            </li>
                                                            <li className="wishlist">
                                                                <Link href="#"><span>Add to wishlist</span></Link>
                                                            </li>
                                                            <li className="quick-view">
                                                                <Link href="#"><span>Quick view</span></Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="product-caption">
                                                    <div className="product-tags">
                                                        <Link href="#">Vegetables</Link>
                                                        <Link href="#">Fruit</Link>
                                                    </div>
                                                    <h4 className="product-title">
                                                        <Link href="shop-single.html">Green Avocado</Link>
                                                    </h4>
                                                    <div className="price">
                                                        <span>$6.00</span>
                                                    </div>
                                                    <Link href="#" className="cart-btn"><i className="fas fa-shopping-bag"></i> Add to cart</Link>
                                                </div>
                                            </div>
                                        </li>

                                    </ul>
                                </div>

                                <div className="tab-pane fade" id="list-tab" role="tabpanel" aria-labelledby="list-tab-control">
                                    <ul className="vt-products colums-2">

                                        <li className="product">
                                            <div className="product-contents">
                                                <div className="row align-center">
                                                    <div className="col-lg-5 col-md-5">
                                                        <div className="product-image">
                                                            <Link href="shop-single.html">
                                                                <Image width={100} height={100} src="/assets/img/products/5.png" alt="Product" />
                                                            </Link>
                                                            <div className="shop-action">
                                                                <ul>
                                                                    <li className="cart">
                                                                        <Link href="#"><span>Add to cart</span></Link>
                                                                    </li>
                                                                    <li className="wishlist">
                                                                        <Link href="#"><span>Add to wishlist</span></Link>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-7 col-md-7">
                                                        <div className="product-caption">
                                                            <div className="product-tags">
                                                                <Link href="#">Fish</Link>
                                                                <Link href="#">Health</Link>
                                                            </div>
                                                            <h4 className="product-title">
                                                                <Link href="shop-single.html">Fresh organic Fish</Link>
                                                            </h4>
                                                            <div className="price">
                                                                <span>$26.00</span>
                                                            </div>
                                                            <Link href="#" className="cart-btn"><i className="fas fa-shopping-bag"></i> Add to cart</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="product">
                                            <div className="product-contents">
                                                <div className="row align-center">
                                                    <div className="col-lg-5 col-md-5">
                                                        <div className="product-image">
                                                            <Link href="shop-single.html">
                                                                <Image width={100} height={100} src="/assets/img/products/1.png" alt="Product" />
                                                            </Link>
                                                            <div className="shop-action">
                                                                <ul>
                                                                    <li className="cart">
                                                                        <Link href="#"><span>Add to cart</span></Link>
                                                                    </li>
                                                                    <li className="wishlist">
                                                                        <Link href="#"><span>Add to wishlist</span></Link>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-7 col-md-7">
                                                        <div className="product-caption">
                                                            <div className="product-tags">
                                                                <Link href="#">Crop</Link>
                                                                <Link href="#">Organic</Link>
                                                            </div>
                                                            <h4 className="product-title">
                                                                <Link href="shop-single.html">Strawberry</Link>
                                                            </h4>
                                                            <div className="price">
                                                                <span><del>$28.00</del></span>
                                                                <span>$17.00</span>
                                                            </div>
                                                            <Link href="#" className="cart-btn"><i className="fas fa-shopping-bag"></i> Add to cart</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>

                                    </ul>
                                </div>


                            </div>
                            
                            <nav className="woocommerce-pagination">
                                <ul className="page-numbers">
                                    <li><Link className="previous page-numbers" href="#"><i className="fas fa-angle-left"></i></Link></li>

                                    <li><span aria-current="page" className="page-numbers current">1</span></li>
                                    <li><Link className="page-numbers" href="#">2</Link></li>
                                    <li><Link className="next page-numbers" href="#"><i className="fas fa-angle-right"></i></Link></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}