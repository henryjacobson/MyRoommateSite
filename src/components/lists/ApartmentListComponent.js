import React from 'react';
import { Link } from "react-router-dom";
import AddApartmentComponent from './AddApartmentComponent';

const ApartmentListComponent = ({
    apartments = [{ id: 0, title: "apartment0" }, { id: 1, title: "apartment1" }, { id: 2, title: "apartment2" }]
}) =>
    <ul className={'list-group'}>
        {
            apartments.map(apartment =>
                <li className={'list-group-item'} key={apartment.id}>
                    <Link to={`/apartments/${apartment.id}`}>
                        {apartment.title}
                    </Link>
                </li>
            )

        }
        <li className={'list-group'}>
            <AddApartmentComponent />
        </li>
    </ul>

export default ApartmentListComponent 
