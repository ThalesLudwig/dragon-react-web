import React from 'react'
import Header from '../components/Header'

import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import { store } from '../redux/store/index'

Enzyme.configure({ adapter: new Adapter() })

describe('Component/Header', () => {

    it('should render', () => {
      const wrapper = shallow(<Header store={store} />)
      expect(wrapper.exists()).toBe(true)
    })

})
