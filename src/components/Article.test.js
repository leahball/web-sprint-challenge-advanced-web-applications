import React from "react";
import "@testing-library/jest-dom";

import userEvent from "@testing-library/user-event";

import Article from "./Article";
import { render, screen } from "@testing-library/react";

const testArticle = {
  id: "aMqwd", //unique article id
  headline: "headline", //title of article
  createdOn: "2021-08-09T18:02:38-04:00",
  author: "me mine",
  summary: "summary", //short summary statement of article
  body: "body body body", //paragraph of article text
};

const testArticle2 = {
  id: "aMqwd", //unique article id
  headline: "headline", //title of article
  createdOn: "2021-08-09T18:02:38-04:00",
  author: "",
  summary: "summary", //short summary statement of article
  body: "body body body", //paragraph of article text
};

test("renders component without errors", () => {
  render(<Article article={testArticle} />);
});

test("renders headline, author from the article when passed in through props", () => {
  render(<Article article={testArticle} />);
  const headline = screen.queryByText(/headline/i);
  const author = screen.queryByText(/me mine/i);
  expect(headline).toBeInTheDocument();
  expect(author).toBeInTheDocument();
});

test('renders "Associated Press" when no author is given', () => {
  render(<Article article={testArticle2} />);
  const altAuth = screen.queryByTestId("author");
  expect(altAuth).toHaveTextContent(/associated press/i);
});

test("executes handleDelete when the delete button is pressed", () => {
  const mockHandleDelete = jest.fn();
  render(<Article article={testArticle} handleDelete={mockHandleDelete} />);
  const deleteButton = screen.queryByTestId("deleteButton");
  userEvent.click(deleteButton);

  expect(mockHandleDelete).toBeCalled();
});

//Task List:
//1. Complete all above tests. Create test article data when needed.
