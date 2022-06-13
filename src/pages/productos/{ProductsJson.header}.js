import * as React from 'react'
import ProductList from '../../components/ProductList'
import { graphql } from "gatsby"

export default function ProductCategory (props) {
console.log("dinamic page props", props)
    return (
        <>
        <ProductList props={props.data} />
        </>
    )
}

export const query = graphql`
  query($id: String) {
    productsJson(id: { eq: $id }) {
      header
      imageUrl
      inventario
    }
  }
  `