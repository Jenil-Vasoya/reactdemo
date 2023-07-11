import React from 'react'

function TitleCallBack() {

    console.log('title render')
  return (
    <h2>
      UseCallBack Title
    </h2>
  )
}

export default React.memo(TitleCallBack)


