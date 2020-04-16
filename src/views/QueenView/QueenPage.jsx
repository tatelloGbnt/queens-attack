import React, {useState} from 'react'

import InputComponent from '../../components/InputComponent'
import BoardComponent from '../../components/BoardComponent'

import './_QueenPage.styl'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'

export const QueenPage = () => {
  const [size, setSize] = useState('')
  const [show, setShow] = useState(false)

  return (
    <div className={'queen'}>
      <div className={'queen-header'}>
        <h1>Queen Attack</h1>
        <h2>Select the size of the board</h2>
      </div>
      <div className= {'queen-body'}>
        <InputComponent
          label={''}
          name={'size'}
          type={'number'}
          placeholder={'Set the size of the board'}
          value={size}
          onChange={e => setSize(e.target.value)}
        />
      </div>
      <div className= {'queen-footer'}>
        <ButtonComponent 
          text={'Start'}
          onClick={() => setShow(size)}
        />
        {show&& <BoardComponent/>}
      </div>
    </div>
  )
}

QueenPage.displayName = "QueenPage"

export default QueenPage
