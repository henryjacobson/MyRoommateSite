import React from 'react';
import { Link } from "react-router-dom";

const ApartmentListComponent = ({
    apartments = [{ id: 0, title: "apartment0" }, { id: 1, title: "apartment1" }, { id: 2, title: "apartment2" }]
}) =>
    <ul className="list-group-item">
        {
            apartments.map(apartment =>
                <li key={apartment.id}>
                    <Link to={`/apartments/${apartment.id}`}>
                        {apartment.title}
                    </Link>
                </li>
            )
        }
    </ul>

export default ApartmentListComponent 
