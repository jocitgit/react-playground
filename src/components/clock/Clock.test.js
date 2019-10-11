import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Clock from './Clock';

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

it("clock renders ok", () => {
    act(() => {
        render(<Clock />, container);
    });
    expect(container.textContent).toMatch(/time/);
    expect(container.textContent).toContain('time');
    
});
