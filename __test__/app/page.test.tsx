import React from 'react'
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import LoginPage from '@/app/page'


describe('Login page', () => {
    it('Should render properly', () => {
        render(<LoginPage />);

        const paragraph = screen.getByRole('paragraph');

        const text = 'Hi there! Welcome to your education showcase';
        
        expect(paragraph).toHaveTextContent(text);
    })
})