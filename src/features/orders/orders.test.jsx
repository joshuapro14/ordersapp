import React from 'react'
import { screen } from '@testing-library/react'
import {renderWithProviders} from '../../utils/test-utils';
import Orders from './orders';

describe("Orders Page", ()=> {
    test("Page shows search By Dropdown box", ()=>{
        renderWithProviders(<Orders />);
        const element = screen.getByTestId('searchBySelect');
        expect(element).toBeInTheDocument();
    })
    test("Page shows search Bar input Box", ()=>{
        renderWithProviders(<Orders />);
        const element = screen.getByTestId('inputsearch');
        expect(element).toBeInTheDocument();
    })
})