import React from 'react';
import { Link } from "react-router-dom";

const ApartmentListComponent = ({
    apartments = [{ id: 1, title: "apartment1" }, { id: 2, title: "apartment2" }, { id: 3, title: "apartment3" }]
}) =>
    <ul className="list-group-item">
        {
            apartments.map(apartment =>
                <li key={apartment.id}>
                    <Link to={`/apartment/${apartment.id}`}>
                        {apartment.title}
                    </Link>
                </li>
            )
        }
    </ul>

export default ApartmentListComponent 