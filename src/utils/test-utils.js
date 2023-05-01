import React from 'react'
import { render } from '@testing-library/react'
// import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
// import ordersReducer from '../features/orders/ordersSlice';
// import loginReducer from '../features/login/loginSlice';
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