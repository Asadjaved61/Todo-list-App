import React from 'react'
import {render, fireEvent, cleanup} from '@testing-library/react';

import TodoForm from './TodoForm';

describe('Todo Container', () => {
    afterEach(cleanup);

    it('it should match snapshot', () => {
        const { asFragment } = render(<TodoForm />);

        expect(asFragment()).toMatchSnapshot();
    })

    it('addTodo should add new todo', async () => {
        const { getByText, getByPlaceholderText, get } = render(<TodoForm />);
        getByPlaceholderText('Add todo...').textContent = 'shopping';
        await fireEvent.click(getByText('Add'));

        expect(getByText('shopping')).toBeTruthy();
    })
})