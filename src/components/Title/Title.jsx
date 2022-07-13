import photoGrid from "../../images/photo-grid.png"
import "./Title.css"

export default function Title() {
    return(
        <div className="title">
            <div className="divforgrid"><img src={photoGrid} className="title--grid"></img></div>
            <div className="text">
                <h1 className="title--name">Online Experiences</h1>
                <h4 className="title--text">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</h4>
            </div>
        </div>
    )
}