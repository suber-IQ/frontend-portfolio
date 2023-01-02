import "./style.scss";
import { useState } from "react";

const filtersData = [
    {
        name: "All",
        id: "all",
    },
    {
        name: "Products",
        id: "product",
    },
    {
        name: "Web Pages",
        id: "web-page",
    },
    {
        name: "Web Apps",
        id: "web-app",
    },
    {
        name: "Mobile Apps",
        id: "mobile-app",
    },
]

const Filter = ({ filterProjects }) => {
    const [active, setActive] = useState('');

    const clickHandler = (id) => {
        setActive(id)
        filterProjects(id)
    }
    return (
        <div>
            <ul className="filters_menu__items">
                {filtersData.map((item) => (
                    <li key={item.id} onClick={() => clickHandler(item.id)} className={`filter_menu__item ${active === item.id ? 'active': ''}`}>
                         {item.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Filter;
