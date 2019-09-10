import React from 'react'
import Home from '../pages/Home'

import Adapter from 'enzyme-adapter-react-16'
import { shallow } from 'enzyme'
import Enzyme from 'enzyme'

Enzyme.configure({ adapter: new Adapter() })

describe('Page/Home', () => {

    const state = {
      feed: [],
      loader: false
    }

    it('should render', () => {
      const wrapper = shallow(<Home />)
      expect(wrapper.exists()).toBe(true)
    })

    it('should not render empty list', () => {
      const wrapper = shallow(<Home />)
      wrapper.instance().setState({ ...state })
      expect(wrapper.find('#no-dragon')).toHaveLength(1)
    })

})
