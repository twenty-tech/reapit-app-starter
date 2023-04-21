import { MediaStateProvider, NavStateProvider, SnackProvider } from "@reapit/elements"
import { FC, PropsWithChildren, Suspense } from "react"
import '@reapit/elements/dist/index.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import AuthRoutes from "./AuthRoutes"
import ErrorBoundary from "./components/ErrorBoundary"

const FixedNavStateProvider: FC<PropsWithChildren> = NavStateProvider
const FixedMediaStateProvider: FC<PropsWithChildren> = MediaStateProvider
const FixedSnackProvider: FC<PropsWithChildren> = SnackProvider

const App: FC = () => (
  <ErrorBoundary>
    <FixedNavStateProvider>
      <FixedMediaStateProvider>
        <FixedSnackProvider>
          <BrowserRouter>
            <Suspense fallback={null}>
              <Routes>
                <Route element={<AuthRoutes />}>
                  <Route path="/" element={<Home />} />
                </Route>
                <Route path="/login" element={<Login />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </FixedSnackProvider>
      </FixedMediaStateProvider>
    </FixedNavStateProvider>
  </ErrorBoundary>
)

export default App
