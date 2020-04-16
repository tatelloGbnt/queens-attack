import React from 'react'
import {shallow} from 'enzyme'
import {BoardComponent} from '../BoardComponent'

describe('BoardComponent', () => {
  const wrapper = shallow(<BoardComponent/>)
  it('Should be a mountable component', () => {
    expect(wrapper.type()).toBe('div')
    expect(wrapper.is('.board')).toBe(true)
  })
})
