import React, { useEffect } from "react";
import Amplify, { Auth } from "aws-amplify";
import awsconfig from "./aws-exports";
import { useSelector, useDispatch } from "react-redux";
import {
  withRouter,
  Route,
  Switch,
  BrowserRouter as Router,
  useHistory,
} from "react-router-dom";
import Signin from "./pages/Auth/Signin/Signin";
import { Snackbar } from "@material/react-snackbar";
import "@material/react-snackbar/dist/snackbar.css";

//= =========== Routes File =============*
import routes from "./routes";
//= =========== Main App Scss =============*
import "./App.scss";

import { checkAutoSignIn } from "./store/actions";
import Loading from "./components/Loading/Loading";
import Business from "./pages/Business/Business";
Amplify.configure(awsconfig);


const App = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    dispatch(checkAutoSignIn());
  }, [dispatch]);

  const error = useSelector((state) => state.layout.error);
  const message = useSelector((state) => state.layout.message);

  return (
    <>
      {error && (
        <Snackbar message={error} timeoutMs={5000} className="snackbar-error" />
      )}
      {message && (
        <Snackbar
          message={message}
          timeoutMs={5000}
          className="snackbar-success"
        />
      )}
      <Loading />
      <Router>
        <React.Suspense fallback={Loading}>
          <Switch>
            { 
              !isAuthenticated ? (
                routes.map((route) =>
                    route.ispublic ? (
                      <Route
                        path={route.path}
                        render={(props) => <route.component {...props} />}
                      />
                    ) : undefined
                  )
              ) : (
                routes.map((route) =>
                    !route.ispublic ? (
                      <Route
                        path={route.path}
                        render={(props) => <route.component {...props} />}
                      />
                    ) : undefined
                  )
              )
            }
           
          </Switch>
          {/* <HomePage/> */}
        </React.Suspense>
      </Router>
    </>
  );
};

export default withRouter(App);
