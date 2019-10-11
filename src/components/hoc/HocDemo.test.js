import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import HocDemo from './HocDemo';

jest.mock("./DataArray", () => ({
    DataArray: [
        { id: 7, letter: 'x' },
        { id: 8, letter: 'y' },
        { id: 0, letter: 'z' } ]
}));

let container = null;

beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it("render with mock data", () => {
    act(() => {
        render(<HocDemo />, container);
    });
    expect(container.textContent).toContain('y');

});
