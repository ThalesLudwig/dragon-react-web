import React from 'react'
import Dragon from '../pages/Dragon'

import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';

Enzyme.configure({ adapter: new Adapter() })

describe('Page/Dragon', () => {

    const state = {
      id: 1,
      name: 'Foo',
      type: 'Bar',
      createdAt: '',
      loader: false,
      isNameEmpty: true,
      isTypeEmpty: true
    }

    it('should render', () => {
      const wrapper = shallow(<Dragon match={{params: state.id}} />)
      expect(wrapper.exists()).toBe(true)
    })

    it('authenticates empty dragon', () => {
      const wrapper = shallow(<Dragon match={{params: state.id}} />)
      wrapper.instance().setState({...state})
      expect(wrapper.find("button").hasClass("button-error")).toBe(true)
  })

})
