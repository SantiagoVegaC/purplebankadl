import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import Footer from './components/Footer/Footer.component'
import Header from './components/Header/Header.component'
const Dashboard = lazy(() =>
  import('../src/components/Dashboard/Dashboard.component')
)
const OtherProducts = lazy(() =>
  import('./components/OtherProducts/OtherProducts.component')
)

const App = () => (
  <>
    <Provider store={store}>
      <Header />
      <Router>
        <Suspense fallback={<div>Espera...</div>}>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/otherProducts" component={OtherProducts} />
          </Switch>
        </Suspense>
      </Router>
      <Footer />
    </Provider>
  </>
)

export default App
