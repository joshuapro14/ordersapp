import React from 'react'
import { screen } from '@testing-library/react'
import { renderWithProviders, waitFor } from '../../utils/test-utils';
import Orders from './orders';
import testdata from './orders_testdata.json';
import axios from 'axios';
import { ORDER_TABLE_HEADER_VALUES, searchBys } from '../../app/constants';


jest.mock("axios");

const getDataInTable = (table) => {
    const thead = table.querySelector('thead');
    const tbody = table.querySelector('tbody');
    const columns = thead.querySelectorAll('tr th');
    const columnNames = [];

    columns.forEach(c => {
        columnNames.push(c.innerHTML);
    });
    const result = [];
    const tbodyRows = tbody.querySelectorAll('tr');
    let columnName;
    tbodyRows.forEach(r => {
        const tds = r.querySelectorAll('td');
        const obj = {};
        tds.forEach((td, i) => {
            columnName = ORDER_TABLE_HEADER_VALUES[columnNames[i]];
            obj[columnName] = td.innerHTML;
        });
        result.push(obj);
    });
    return result;
}

const getOptionsInSearchByDropDown = (searchBySelect) => {
    const options = searchBySelect.querySelectorAll('option');
    const result = [];
    options.forEach(o => result.push(o.innerHTML));
    return result;
}

describe("Orders Page", () => {
    it("should show search By Dropdown box", () => {
        renderWithProviders(<Orders />);
        const element = screen.getByTestId('searchBySelect');
        expect(element).toBeInTheDocument();
    })
    it("should show All search By options in search By Dropdown box", () => {
        renderWithProviders(<Orders />);
        const element = screen.getByTestId('searchBySelect');
        expect(element).toBeInTheDocument();
        const options = getOptionsInSearchByDropDown(element);
        expect(
            options,
            `Option Mismatch`
        ).toMatchObject(searchBys);
    })
    it("Page shows search Bar input Box", () => {
        renderWithProviders(<Orders />);
        const element = screen.getByTestId('inputsearch');
        expect(element).toBeInTheDocument();
    })

    it("should show table with orders", async () => {
        const tenOrders = testdata.orders.slice(0, 10);
        const totalOrders = testdata.orders.length;
        axios.get.mockResolvedValueOnce({ data: tenOrders, headers: { "x-total-count": totalOrders } });
        renderWithProviders(<Orders />);
        await waitFor();
        const table = screen.getByTestId('table-orders');
        expect(table).toBeInTheDocument();
    })

    it("Should match number of orders in page with API Orders", async() => {
        const tenOrders = testdata.orders.slice(0, 10);
        const totalOrders = testdata.orders.length;
        axios.get.mockResolvedValueOnce({ data: tenOrders, headers: { "x-total-count": totalOrders } });
        renderWithProviders(<Orders />);
        await waitFor();
        const table = screen.getByTestId('table-orders');
        expect(table).toBeInTheDocument();
        const orders = getDataInTable(table);
        expect(
            orders.length,
            `Rendered Orders Size: ${orders.length}; API Orders Size: ${tenOrders.length}`
        ).toEqual(tenOrders.length);
    })

    it("Should match orders in page with API Orders", async() => {
        const tenOrders = testdata.orders.slice(0, 10);
        const totalOrders = testdata.orders.length;
        axios.get.mockResolvedValueOnce({ data: tenOrders, headers: { "x-total-count": totalOrders } });
        renderWithProviders(<Orders />);
        await waitFor();
        const table = screen.getByTestId('table-orders');
        expect(table).toBeInTheDocument();
        const orders = getDataInTable(table);
        tenOrders.forEach((apiOrder,i) => {
            const renderedOrder = orders[i];
            expect(
                renderedOrder,
                `Order Mismatch for order @ index: ${i}`
            ).toMatchObject(apiOrder);
        })
    })
})