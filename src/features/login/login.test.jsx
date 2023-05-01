import React from 'react'
import { screen } from '@testing-library/react'
import {renderWithProviders} from '../../utils/test-utils';
import Login from './Login';

describe("Login Page", ()=> {
    it("should show user name input Box", ()=>{
        renderWithProviders(<Login />);
        const element = screen.getByTestId('userName');
        expect(element).toBeInTheDocument();
    })
    it("should show password input Box", ()=>{
        renderWithProviders(<Login />);
        const element = screen.getByTestId('password');
        expect(element).toBeInTheDocument();
    })
})