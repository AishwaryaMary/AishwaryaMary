import React from "react";
import renderer from "react-test-renderer";
import { Text } from "react-native";
import ProductDetails from "../views/ProductDetails";

jest.mock("../../../../utils/formatPrice", () =>
  jest.fn((price) => `$${price.toFixed(2)}`)
);

describe("ProductDetails", () => {
  const defaultProps = {
    title: "Test Product",
    price: 100,
    description: "This is a test product description.",
    theme: "light",
  };

  it("renders correctly with default props", () => {
    const tree = renderer.create(<ProductDetails {...defaultProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("displays default values when props are missing", () => {
    const instance = renderer.create(<ProductDetails />).root;

    const title = instance.findAllByType(Text)[0].props.children;
    const price = instance.findAllByType(Text)[1].props.children;
    const description = instance.findAllByType(Text)[2].props.children;

    expect(title).toBe("No Title");
    expect(price).toBe("$0.00");
    expect(description).toBe("No Description");
  });

  it("formats the price correctly", () => {
    const instance = renderer.create(<ProductDetails {...defaultProps} />).root;
    const price = instance.findAllByType(Text)[1].props.children;

    expect(price).toBe("$100.00");
  });

  it("displays the correct title and description", () => {
    const instance = renderer.create(<ProductDetails {...defaultProps} />).root;

    const title = instance.findAllByType(Text)[0].props.children;
    const description = instance.findAllByType(Text)[2].props.children;

    expect(title).toBe("Test Product");
    expect(description).toBe("This is a test product description.");
  });
});
