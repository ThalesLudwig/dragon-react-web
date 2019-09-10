import React from 'react'
import Login from '../pages/Login'
import Header from '../components/Header'

import Adapter from 'enzyme-adapter-react-16'
import { shallow, mount } from 'enzyme'
import Enzyme from 'enzyme'
import { store } from '../redux/store/index'

Enzyme.configure({ adapter: new Adapter() })

describe('Page/Login', () => {

    const user = {
        username: '',
        password: '',
        loader: false
    }

    it('should render', () => {
        const wrapper = shallow(<Login store={store} />)
        expect(wrapper.exists()).toBe(true)
    })

    it('should not render header', () => {
        const wrapper = shallow(<Login store={store} />)
        expect(wrapper.containsMatchingElement(<Header />)).toBe(false)
    })

    it('has two inputs', () => {
        const wrapper = mount(<Login store={store} />)
        expect(wrapper.find('input')).toHaveLength(2)
    })

    it('starts with empty user data', () => {
        const wrapper = shallow(<Login store={store} />).dive().dive()
        expect(wrapper.instance().state).toEqual({...user})
    })

    it('authenticates empty user', () => {
        const wrapper = shallow(<Login store={store} />).dive().dive()
        wrapper.instance().setState({...user})
        expect(wrapper.find('button').hasClass('button-error')).toBe(true)
    })

})
