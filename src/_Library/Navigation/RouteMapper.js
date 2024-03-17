import React, {Fragment} from 'react';
import {Link} from "react-router-dom";

function RouteMapper({routes}) {
    return (
        <Fragment>
            {routes.map((singleLink) => {
                const {id, name, url} = singleLink;
                return (<li key={id}>
                    <Link to={url}>{name}</Link>
                </li>);
            })}
        </Fragment>
    );
}

export default RouteMapper;