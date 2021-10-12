import React from 'react';
import { Route } from 'react-router-dom';
import Navbar from '../../component/layout/navbar';
import Footer from '../../component/layout/footer';
const PublicRoute = ({ component: Component, search, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        return (
          <>
            <Navbar search={search}/>
            <Component {...props} />
            <Footer />
          </>
        );
      }}
    />
  );
};

export default PublicRoute;
