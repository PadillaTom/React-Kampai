import React, {Fragment} from 'react';
import {Link} from "react-router-dom";

function RouteMapper({routes, onClick}) {
    return (
        <Fragment>
            {routes.map((singleLink) => {
                const {id, name, url} = singleLink;
                return (<li key={id}>
                    <Link to={url} onClick={onClick}>{name}</Link>
                </li>);
            })}
        </Fragment>
    );
}

export default RouteMapper;