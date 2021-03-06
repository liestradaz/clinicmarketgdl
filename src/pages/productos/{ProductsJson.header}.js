import * as React from 'react'
import ProductList from '../../components/ProductList'
import { graphql } from "gatsby"

export default function ProductCategory (props) {

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
      imageUrl {
        childImageSharp {
          gatsbyImageData
        }
      }
      inventario
    }
  }
  `