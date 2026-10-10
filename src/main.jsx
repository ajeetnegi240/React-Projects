import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async';
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from "./pages/Home"
import AnimeGenre from "./pages/AnimeGenrePage.jsx"
import SearchResult from "./pages/SearchPage.jsx"
import ShowAnime from "./pages/AnimePage.jsx"
import ErrorBoundary from "./ErrorBoundary"



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/SearchPage",
            element: <SearchResult />,
        },
        {
            path: "/AnimeGenre",
            element: <AnimeGenre />,
        },
        {
            path:"/anime/:id",
            element:(
            <ErrorBoundary fallback={                
                <div className=" flex w-[100vw]  h-[100vh]  justify-center ">
                    <div className="flex bg-slate-600 w-[100vw] h-[40vw] justify-center py-80 items-center">
                        <h1 className="text-3xl text-oliver-400">Error has occured </h1>
                    </div>
                </div>}>
                <ShowAnime />
              </ErrorBoundary> ),
        },]
  }])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <HelmetProvider>
        <RouterProvider router={router}/>
      </HelmetProvider>
    </Provider>
  </StrictMode>,
)
