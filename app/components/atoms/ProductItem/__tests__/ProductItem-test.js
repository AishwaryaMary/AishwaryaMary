import React from "react";
import renderer from "react-test-renderer";
import { TouchableOpacity } from "react-native";
import { router } from "expo-router";
import ProductItem from "../views/ProductItem";

jest.mock("expo-router", () => ({
  router: {
    push: jest.fn(),
  },
}));

jest.mock("../../../../utils/formatPrice", () => (price) => `$${price}`);

describe("ProductItem", () => {
  const mockProduct = {
    id: 1,
    title: "Sample Product",
    price: 29.99,
    description: "Sample Description",
    category: { name: "Sample Category" },
    images: ["https://example.com/image.jpg"],
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders correctly with product data", () => {
    const tree = renderer
      .create(<ProductItem product={mockProduct} theme="light" />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("navigates to product details on press", () => {
    const instance = renderer.create(
      <ProductItem product={mockProduct} theme="light" />
    ).root;

    const button = instance.findByType(TouchableOpacity);
    button.props.onPress();

    expect(router.push).toHaveBeenCalledWith({
      pathname: "/screens/ProductDetailScreen/views/ProductDetailScreen",
      params: {
        id: 1,
        title: "Sample Product",
        price: "29.99",
        description: "Sample Description",
        category: "Sample Category",
        images: JSON.stringify(["https://example.com/image.jpg"]),
      },
    });
  });
});
