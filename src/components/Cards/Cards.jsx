import "./Cards.css"
import image1 from "../../images/img1.png"
import image2 from "../../images/img2.png"
import image3 from "../../images/img3.png"
import star from "../../images/star.png"

export default function Cards () {
    return (
        <div className="cards">
            <div className="card">

                <div className="card--image">
                    <img src={image1} className="card--image-image"></img>
                    <p>
                        <span>SOLD OUT</span>
                    </p>
                </div>

                <div className="card--rates">
                    <img src={star} className="card--rates-image"></img>
                    <p className="card--rates-stars">5.0</p>
                    <p className="card--rates-text"> (6) · USA</p>
                </div>

                <div className="card--description">
                    <p className="card--description-text">Life lessons with Katie Zafaeres asdfasdf asdf sadfsf</p>
                </div>

                <div className="card--pricing">
                    <p className="card--pricing-f">From $136</p>
                    <p className="card--pricing-nf"> / person</p>
                </div>
            </div>

            <div className="card">

                <div className="card--image">
                    <img src={image2} className="card--image-image"></img>
                    <p>
                        <span>ONLINE</span>
                    </p>
                </div>

                <div className="card--rates">
                    <img src={star} className="card--rates-image"></img>
                    <p className="card--rates-stars">5.0</p>
                    <p className="card--rates-text"> (30) · USA</p>
                </div>

                <div className="card--description">
                    <p className="card--description-text">Learn wedding photography</p>
                </div>

                <div className="card--pricing">
                    <p className="card--pricing-f">From $125</p>
                    <p className="card--pricing-nf"> / person</p>
                </div>
            </div>

            <div className="card">

                <div className="card--image">
                    <img src={image3} className="card--image-image"></img>
                </div>

                <div className="card--rates">
                    <img src={star} className="card--rates-image"></img>
                    <p className="card--rates-stars">4.8</p>
                    <p className="card--rates-text"> (2) · USA</p>
                </div>

                <div className="card--description">
                    <p className="card--description-text">Group Mountain Biking sport</p>
                </div>

                <div className="card--pricing">
                    <p className="card--pricing-f">From $50</p>
                    <p className="card--pricing-nf"> / person</p>
                </div>
            </div>
        </div>
    )
}