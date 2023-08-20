import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { App } from './App'
import reportWebVitals from './reportWebVitals'
import { Provider } from 'react-redux'
import store from 'store/store'
import { HashRouter } from 'react-router-dom'
import { SkeletonTheme } from 'react-loading-skeleton'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <Provider store={store}>
    <SkeletonTheme baseColor='#202020' highlightColor='#444'>
      <HashRouter>
        <App />
      </HashRouter>
    </SkeletonTheme>
  </Provider>
)

reportWebVitals()
