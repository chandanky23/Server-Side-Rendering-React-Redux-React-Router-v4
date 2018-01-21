import React from 'react';
import { Route } from 'react-router-dom';

import Home from './client/components/Home';
import Jobs from './client/components/Jobs';

export default () => {
    return (
        <div>
            <Route exact path="/" component={Home} />
            <Route path="/jobs" component={Jobs} />
        </div>
    )
}