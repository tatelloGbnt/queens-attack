import React, {useState} from 'react'

import InputComponent from '../../components/InputComponent'

export const QueenPage = () => {
  const [size, setSize] = useState('')

  return (<div className={'queen'}>
    <div>
      <InputComponent
        name={'size'}
        type={'number'}
        placeholder={'Set the size of the board'}
        value={size}
        onChange={e=> setSize(e.target.value)}
      />
      {size&&<h1>Hello, {size}!</h1>}

    </div>
  </div>
  )
}

QueenPage.displayName = "QueenPage"

export default QueenPage