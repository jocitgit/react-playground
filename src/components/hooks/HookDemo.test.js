import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import HookDemo from './HookDemo';
import {
    getByText,
    getByTestId,
    fireEvent
  } from '@testing-library/dom';
  

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

it("test button clicks", () => {
    act(() => {
        render(<HookDemo />, container);
    });
    expect(container.querySelector("[data-testid=counter]").textContent).toContain('0');

   const button = container.querySelector("button");
   
   act(() => {
       button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
   });
   act(() => {
    button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
   });

   expect(container.querySelector("[data-testid=counter]").textContent).toContain('2');

   // Using React Testing Library
   const sameButton = getByText(container, 'Increment age');
   sameButton.click();
   expect(getByTestId(container, 'counter').innerHTML).toContain('3');
   fireEvent.click(sameButton); // defaults to left click - can override
   expect(getByTestId(container, 'counter').innerHTML).toContain('4');

});
