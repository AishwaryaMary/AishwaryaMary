import React from "react";
import renderer from "react-test-renderer";
import { useRouter } from "expo-router";
import BackButton from "../views/BackButton";

jest.mock("expo-router", () => ({
  useRouter: jest.fn(),
}));

describe("BackButton", () => {
  const mockPush = jest.fn();

  beforeEach(() => {
    useRouter.mockReturnValue({ push: mockPush });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders correctly", () => {
    const tree = renderer.create(<BackButton theme="light" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
