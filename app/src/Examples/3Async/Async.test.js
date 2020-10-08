import React from 'react';
import { render, wait } from '@testing-library/react';
import App from './Async';
import axios from 'axios';

jest.mock("axios", () => ({
  get: jest.fn(),
}));

beforeEach(() => {
  jest.clearAllMocks();
})

describe('Counter list', () => {
  it('should render a list of counters fetched (successfully) from remote', async () => {
    //1. definir variables
    const expectedResponse = { data: [
      { title: 'first counter', id: "1", count: 500},
      { title: 'second counter', id: "2", count: 500},
      { title: 'third counter', id: "3", count: 500}
    ]}
    //2. crear escenario
    axios.get.mockImplementationOnce(() => Promise.resolve(expectedResponse));
    const { getByText, queryByText } = render(<App />);
    // 3. assertion
    expect(queryByText("counters are loading...")).toBeInTheDocument();
    await wait(() => expect(axios.get).toHaveBeenCalled());
    expectedResponse.data.map(({ title }) => expect(getByText(title)).toBeInTheDocument());
    expect(queryByText("counters are loading...")).not.toBeInTheDocument();
  });
  it('should render error message when fetch fails', async () => {
    const expectedResponse = new Error("bad request");
    axios.get.mockImplementationOnce(() => Promise.reject(expectedResponse));
  
    const { getByText, queryByText } = render(<App />);
    
    expect(queryByText("counters are loading...")).toBeInTheDocument();
    await wait(() => expect(axios.get).toHaveBeenCalled());
    expect(getByText("bad request")).toBeInTheDocument();
    expect(queryByText("counters are loading...")).not.toBeInTheDocument();
  });
});
