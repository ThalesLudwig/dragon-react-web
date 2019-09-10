import React from 'react'
import Card from '../components/Card'

import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';

Enzyme.configure({ adapter: new Adapter() })

describe('Component/Card', () => {

    const dragon = {
        id: 1,
        name: 'Foo',
        type: 'Bar'
    }

    it('should render', () => {
        const wrapper = shallow(<Card dragon={dragon} />)
        expect(wrapper.exists()).toBe(true)
    })

    it('should render name', () => {
        const wrapper = shallow(<Card dragon={dragon} />)
        expect(wrapper.containsMatchingElement(<span>{dragon.name}</span>)).toBe(true)
    })

    it('should render type', () => {
        const wrapper = shallow(<Card dragon={dragon} />)
        expect(wrapper.containsMatchingElement(<span>{dragon.type}</span>)).toBe(true)
    })

})
