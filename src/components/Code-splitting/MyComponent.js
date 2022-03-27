import React, { Suspense } from 'react';
import { CircularProgress, Box } from '@mui/material';

const OtherComponent = React.lazy(() => import('./OtherComponent'))

function MyComponent() {
    return (
        <div>
            <Suspense fallback={<CircularProgress />}>
                <OtherComponent name="My name: Phillip"/>
            </Suspense>
        </div>
    )
}

export default MyComponent;