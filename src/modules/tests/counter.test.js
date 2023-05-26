import { JSDOM } from 'jsdom';
import counter from '../counter.js';

describe('counter function', () => {
  let element;

  beforeEach(() => {
    const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>');
    global.document = dom.window.document;

    element = document.createElement('div');
  });

  afterEach(() => {
    delete global.document;
    element = null;
  });

  it('updates the text content correctly', () => {
    const array = [1, 2, 3];
    counter(element, array);
    expect(element.textContent).toBe('3');
  });

  it('updates the text content correctly with an empty array', () => {
    const array = [];
    counter(element, array);
    expect(element.textContent).toBe('0');
  });
});
