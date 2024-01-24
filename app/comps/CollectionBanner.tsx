//import app_config from "remix.config.js"
import { PiBowlFoodFill, PiBirdFill, PiDogLight, PiFish, PiCatThin } from "react-icons/pi";

export default function CollectionBanner() {
    return (
        <ul className="collection col text-center d-flex list-unstyled">
            <li className="col text-center ">
                <a href="/" className="categories-item">
                    {<PiBowlFoodFill style={{ color: 'DEAD6F' }} size={100} />}
                    <h5> foodies </h5>
                </a>
            </li>
            <li className="col text-center  ">
                <a href="/" className="categories-item">
                    {<PiBirdFill style={{ color: 'DEAD6F' }} size={100} />}
                    <h5> foodies </h5>
                </a>
            </li>
            <li className="col text-center ">
                <a href="/" className="categories-item">
                    {<PiDogLight style={{ color: 'DEAD6F' }} size={100} />}
                    <h5> foodies </h5>
                </a>
            </li>
            <li className="col text-center ">
                <a href="/" className="categories-item">
                    {<PiFish style={{ color: 'DEAD6F' }} size={100} />}
                    <h5> foodies </h5>
                </a>
            </li>
            <li className="col text-center ">
                <a href="/" className="categories-item">
                    {<PiCatThin style={{ color: 'DEAD6F', fontWeight: 'bold' }} size={100} />}
                    <h5> foodies </h5>
                </a>
            </li>

        </ul>
    );
}


