import React from 'react'
import {render, fireEvent, cleanup, getByText} from '@testing-library/react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TodoContainer from './TodoContainer';

describe('Todo Container', () => {
    Enzyme.configure({ adapter: new Adapter() })
    afterEach(cleanup);

    it('it should match snapshot', () => {
        const { asFragment } = render(<TodoContainer />);

        expect(asFragment()).toMatchSnapshot();
    })

    it('addTodo should add new todo', () => {
       const wrapper = mount(<TodoContainer />);
       wrapper.instance().addTodo('shopping');

       const expectedValue = wrapper.instance().state.todos[0];
       expect(expectedValue).toMatchObject({ text: 'shopping', isCompleted: false })
    })

    it('moveDoneTaskAtBottom should move completed task to bottom', async () => {
        const wrapper = mount(<TodoContainer />);

        wrapper.instance().addTodo('shopping');
        wrapper.instance().addTodo('buy food');
        wrapper.instance().updateTodoStatus(0);
        wrapper.instance().moveDoneTaskAtBottom();

        expect(wrapper.instance().state.todos[1].text).toEqual('shopping')
     })

     it('updateTodoStatus should update todo status', async () => {
        const wrapper = mount(<TodoContainer />);

        wrapper.instance().addTodo('shopping');
        wrapper.instance().updateTodoStatus(0);

        expect(wrapper.instance().state.todos[0].isCompleted).toBeTruthy();
     })

     it('removeTodo should remove todo', async () => {
        const wrapper = mount(<TodoContainer />);

        wrapper.instance().addTodo('shopping');
        wrapper.instance().removeTodo(0);

        expect(wrapper.instance().state.todos[0]).toBeUndefined()
     })

     it('todoCount should give number of todos', async () => {
        const wrapper = mount(<TodoContainer />);

        wrapper.instance().addTodo('shopping');
        wrapper.instance().addTodo('buy food');

        const expectedValue = wrapper.instance().todoCount();

        expect(expectedValue).toBe(2)
     })
});