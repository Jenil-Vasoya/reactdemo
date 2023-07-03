import React from 'react';

function demo()
{
    return React.createElement(
        'div', {id: 'id1',className:'cls1'} , React.createElement('h1', null, 'Hello React')
    )
}

export default demo