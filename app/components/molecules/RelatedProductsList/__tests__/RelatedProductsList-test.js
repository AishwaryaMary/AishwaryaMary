import React from "react";
import renderer from "react-test-renderer";
import { FlatList, Text, TouchableOpacity } from "react-native";
import RelatedProducts from "../views/RelatedProducts";
import { useRouter } from "expo-router";

jest.mock("expo-router", () => ({
  useRouter: jest.fn(),
}));

jest.mock("../../../../utils/formatPrice", () =>
  jest.fn((price) => `$${price}`)
);

describe("RelatedProducts", () => {
  const mockProducts = [
    { id: 1, title: "Product 1", price: 100, images: ["image1.jpg"] },
    { id: 2, title: "Product 2", price: 200, images: ["image2.jpg"] },
  ];

  const mockPush = jest.fn();

  beforeEach(() => {
    useRouter.mockReturnValue({ push: mockPush });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders correctly", () => {
    const tree = renderer.create(
      <RelatedProducts relatedProducts={mockProducts} />
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it("renders product list", () => {
    const tree = renderer.create(
      <RelatedProducts relatedProducts={mockProducts} />
    ).root;

    const flatList = tree.findByType(FlatList);
    expect(flatList.props.data.length).toBe(2);
  });

  it("renders product details correctly", () => {
    const tree = renderer.create(
      <RelatedProducts relatedProducts={mockProducts} />
    ).root;

    const productTitles = tree
      .findAllByType(Text)
      .map((node) => node.props.children);
    expect(productTitles).toContain("Product 1");
    expect(productTitles).toContain("Product 2");
  });

  it("navigates to product details on press", () => {
    const tree = renderer.create(
      <RelatedProducts relatedProducts={mockProducts} />
    ).root;

    const button = tree.findAllByType(TouchableOpacity)[0];

    button.props.onPress();

    expect(mockPush).toHaveBeenCalledWith({
      pathname: "/screens/ProductDetailScreen/views/ProductDetailScreen",
      params: {
        id: 1,
        title: "Product 1",
        price: 100,
        description: undefined,
        category: undefined,
        images: JSON.stringify(["image1.jpg"]),
      },
    });
  });
});
