import React from 'react';
import {WithSidebar} from "../../layouts";

import {CreateTimeline} from "./create-timeline";
import {Switch, Route, useRouteMatch} from "react-router-dom";

export const Dashboard = () => {
    let match = useRouteMatch();

    return (
        <WithSidebar>
            <h2>Dashboard</h2>

            <Switch>
                <Route path={`${match.path}/new-timeline`} component={CreateTimeline} />
                <Route path={match.path}>
                    Dashboard data goes here!
                </Route>
            </Switch>
        </WithSidebar>
    )
};
