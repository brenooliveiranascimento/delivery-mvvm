import React, { FC } from "react";
import {
  ActivityIndicator,
  SectionList,
  Text,
  SafeAreaView,
  RefreshControl,
} from "react-native";
import { HomeModel } from "./home.model";
import { ProductCard } from "./components/ProductCard";
import { styles } from "./styles";
import { Header } from "./components/Header";

export default function HomeVIew({
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
}: HomeModel) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#10172a" }}>
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
          isFetchingNextPage ? (
            <ActivityIndicator style={{ margin: 16 }} />
          ) : null
        }
      />
    </SafeAreaView>
  );
}
