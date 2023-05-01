import React from 'react';
import { render, act } from '@testing-library/react';
import { Provider } from 'react-redux';
import {setupStore} from '../app/store';

export const renderWithProviders = (
    ui,
    {
        preloadedState = {},
        // Automatically create a store instance if no store was passed in
        store = setupStore(preloadedState),
        ...renderOptions
    } = {}
) => {
    const Wrapper = ({ children }) => {
        return <Provider store={store}>{children}</Provider>
    }

    return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
}

export const waitFor = async(timeInMs=50) => {
    await act(async () => {
        await new Promise((resolve) => {
          setTimeout(resolve, timeInMs);
        });
    });
}