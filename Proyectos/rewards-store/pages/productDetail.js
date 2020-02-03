import React from 'react'
import Link from 'next/link';
import  DesktopNavbar  from "../components/desktopNavbar";
import { getProducts } from "../ducks/reducers/productReducer";
import { getUser } from "../ducks/reducers/userReducer";


const PostLink = props => (
    <li>
      <Link href={`/productDetail?title=${props.title}`}>
        <a>{props.title}</a>
      </Link>
    </li>
  );

const productDetail = (props) => {
    return (
        <div>
            <DesktopNavbar {...props} />
             <h1>My Blog</h1>
        <ul>
            <PostLink title="Hello Next.js" />
            <PostLink title="Learn Next.js is awesome" />
            <PostLink title="Deploy apps with Zeit" />
        </ul>
        </div>
    )
}

productDetail.getInitialProps = async ({ reduxStore }) => {
    const products = await reduxStore.dispatch(getProducts());
    const user = await reduxStore.dispatch(getUser());
  
    return { products, user };
  };

export default productDetail
