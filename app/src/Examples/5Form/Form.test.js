import React from "react";
import { render, fireEvent } from '@testing-library/react';
import Form from "./Form";

describe("Form", () => {
  it("Should call onSearch when search not empty", () => {
    // prepara las variables
    const onSearchMentira = jest.fn();
    //  ejecutar el test
    const { getByLabelText, getByText } = render(<Form onSearch={onSearchMentira} />)
    fireEvent.change(getByLabelText("Buscador"), { target: { value: "probando buscador"}});
    fireEvent.click(getByText("search"));
    // hacer assertions
    expect(onSearchMentira).toHaveBeenCalled();
    
  });

  it("Should not call onSearch when search empty", () => {
    // prepara las variables
    const onSearchMentira = jest.fn();
    //  ejecutar el test
    const { getByLabelText, getByText } = render(<Form onSearch={onSearchMentira} />)
    fireEvent.click(getByText("search"));
    // hacer assertions
    expect(onSearchMentira).not.toHaveBeenCalled();
  });
  
});