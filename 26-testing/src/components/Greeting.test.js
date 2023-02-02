import { render, screen } from '@testing-library/react';
import Greeting from "./Greeting";

test("renders Hello World as a text", () => {
  // Arrange
  render(<Greeting />);

  // Act
  // 이번 테스트에서는 따로 Act 파트가 없다.

  // Assert
  const helloWorldElement = screen.getByText("Hello World!");
  expect(helloWorldElement).toBeInTheDocument();
});
