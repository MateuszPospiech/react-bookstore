import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';

import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('App tests', () => {

    it('App renders without a problem', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Header />, div);
        ReactDOM.unmountComponentAtNode(div);
    })

    it ('Hello world renders', () =>{
        const wrapper = shallow(<Header/>);
        // console.log(wrapper.debug());
        expect(wrapper.find('div').text()).toBe('My Books');
        wrapper.setState({
            bookstoreName : "Your Books"
        });
        expect(wrapper.find('div').text()).toBe('Your Books');
    })

    it('Header state changes after clicking on header div', () => {
        const wrapper = shallow(<Header/>);
        expect(wrapper.state().bookstoreName).toBe('My Books');
        wrapper.find('.header').simulate('click');
        expect(wrapper.state().bookstoreName).toBe('Your Books');
    })

    it ('Snapshot watches', () =>{
        const wrapper = shallow(<Header/>);
        expect(wrapper).toMatchSnapshot();
    })
})