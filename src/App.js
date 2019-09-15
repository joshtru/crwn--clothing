import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./App.css";

import Homepage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Header from "./components/header/header.component";
import CheckoutPage from "./pages/checkout/checkout.component";

import { selectCurrentUser } from "./redux/user/user.selectors";

class App extends React.Component {
  unsubsribeFromAuth = null;

  componentDidMount() {
    // this.unsubsribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
    // 	if (userAuth) {
    // 		const userRef = await createUserProfileDocument(userAuth);
    // 		userRef.onSnapshot((snapShot) => {
    // 			setCurrentUser({
    // 				id: snapShot.id,
    // 				...snapShot.data()
    // 			});
    // 		});
    // 	}
    // 	setCurrentUser(userAuth);
    // });
  }

  componentWillUnmount() {
    this.unsubsribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignInAndSignUp />
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(App);
