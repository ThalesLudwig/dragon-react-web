import React from 'react'
import App from '../App'

import Adapter from 'enzyme-adapter-react-16'
import { shallow } from 'enzyme'
import Enzyme from 'enzyme'

Enzyme.configure({ adapter: new Adapter() })

describe('App', () => {

    it('should render', () => {
        const wrapper = shallow(<App />)
        expect(wrapper.exists()).toBe(true)
    })

})
