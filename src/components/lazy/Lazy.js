import React from 'react';
import { LoadingError } from '../error/error.js';

// Only loads the bundle containing AnyComponent/BadCompnent when the component is first rendered
const AnyComponent = React.lazy(() => import('../any/AnyComponent')); // only default exports can be used with lazy()
const BadComponent = React.lazy(() => import('../bad/BadComponent'));

function Lazy() {
    // Uses Error Boundary around lazy loaded component
    return (
        <div>
            <LoadingError>
                <React.Suspense fallback={<div>Loading...</div>}>
                    <AnyComponent />
                </React.Suspense>
            </LoadingError>
            <LoadingError>
                <React.Suspense fallback={<div>Loading...</div>}>
                    <BadComponent />
                </React.Suspense>
            </LoadingError>
        </div>

    );
}

export default Lazy;

