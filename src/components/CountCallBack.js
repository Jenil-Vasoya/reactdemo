import React from 'react'

function CountCallBack({text,count}) {
    console.log( `Rendering ${text} `)
return <div>{text} - {count}</div>

}

export default React.memo(CountCallBack)
