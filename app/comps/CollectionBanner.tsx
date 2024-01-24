//import app_config from "remix.config.js"
import { PiBowlFoodFill, PiBirdFill, PiDogLight, PiFish, PiCatThin } from "react-icons/pi";

export default function CollectionBanner() {
    return (
        <ul className="collection col text-center d-flex list-unstyled">
            <li className="col text-center ">
                <a href="/foodies" className="categories-item">
                    {<PiBowlFoodFill style={{ color: 'DEAD6F' }} size={100} />}
                    <h5> foodies </h5>
                </a>
            </li>
            <li className="col text-center  ">
                <a href="/birdshop" className="categories-item">
                    {<PiBirdFill style={{ color: 'DEAD6F' }} size={100} />}
                    <h5> Bird Shop </h5>
                </a>
            </li>
            <li className="col text-center ">
                <a href="/dogshop" className="categories-item">
                    {<PiDogLight style={{ color: 'DEAD6F' }} size={100} />}
                    <h5> Dog shop </h5>
                </a>
            </li>
            <li className="col text-center ">
                <a href="/fishshop" className="categories-item">
                    {<PiFish style={{ color: 'DEAD6F' }} size={100} />}
                    <h5> Fish shop </h5>
                </a>
            </li>
            <li className="col text-center ">
                <a href="/catshop" className="categories-item">
                    {<PiCatThin style={{ color: 'DEAD6F', fontWeight: 'bold' }} size={100} />}
                    <h5> Cat shop </h5>
                </a>
            </li>

        </ul>
    );
}


