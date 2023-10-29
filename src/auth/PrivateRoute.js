/* eslint react/jsx-props-no-spreading: "off" */
import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from './Auth';

const PrivateRoute = ({ component: RouteComponent, data, ...rest }) => {
  const { currentUser } = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={(routeProps) => (currentUser ? (
        <RouteComponent {...routeProps} {...data} />
      ) : (
        <Redirect to="/login" />
      ))}
    />
  );
};

export default PrivateRoute;
