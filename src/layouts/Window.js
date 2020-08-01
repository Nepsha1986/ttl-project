import React from 'react';

export const Window = ({children}) => (
    <main className={'window-layout'}>
        <div className="window-layout__container">{children}</div>
    </main>
);
