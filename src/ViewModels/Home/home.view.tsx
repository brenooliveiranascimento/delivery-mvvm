import React, { FC } from "react";
import {
  ActivityIndicator,
  SectionList,
  Text,
  RefreshControl,
} from "react-native";
import { useHomeModel } from "./home.model";
import { styles } from "./styles";
import { Header } from "./components/Header";
import { ProductCard } from "../../shared/components/ProductCard";

export const HomeVIew: FC<ReturnType<typeof useHomeModel>> = ({
  fetchNextPage,
  hasNextPage,
  isLoading,
  isFetchingNextPage,
  products,
  refetch,
  handleCategory,
  categories,
  categorySelected,
  isFetching,
  cartProducts,
}) => {
  return (
    <SectionList
      refreshControl={
        <RefreshControl
          refreshing={isFetching}
          onRefresh={refetch}
          tintColor={"#A3E635"}
          colors={["#A3E635"]}
        />
      }
      refreshing={isLoading}
      style={styles.container}
      sections={products}
      data={products}
      keyExtractor={(item) => `${item?.id}`}
      renderItem={({ item }) => <ProductCard product={item} />}
      onEndReached={() => {
        if (hasNextPage && !isFetchingNextPage) fetchNextPage();
      }}
      ListHeaderComponent={
        <Header
          cartProducts={cartProducts}
          selectedCategory={categorySelected}
          handleCategory={handleCategory}
          categories={categories}
        />
      }
      renderSectionHeader={({ section: { title } }) => (
        <Text style={styles.sectionHeaderStyle}>{title}</Text>
      )}
      onEndReachedThreshold={0.1}
      ListFooterComponent={
        isFetchingNextPage ? <ActivityIndicator style={{ margin: 16 }} /> : null
      }
    />
  );
};
