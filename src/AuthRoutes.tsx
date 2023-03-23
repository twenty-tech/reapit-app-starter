import { useReapitConnect } from "@reapit/connect-session"
import { Loader, MainContainer, PageContainer } from "@reapit/elements"
import { Suspense } from "react"
import { Navigate, Outlet, useLocation } from "react-router-dom"
import SideNavigation from "./components/SideNavigation"
import { reapitConnectBrowserSession } from "./constants"

export const AuthRoutes = () => {
  const { connectSession, connectInternalRedirect } = useReapitConnect(reapitConnectBrowserSession)
  const location = useLocation()
  const currentUri = `${location?.pathname}${location?.search}`

  if (!connectSession) {
    return (
      <MainContainer>
        <PageContainer>
          <Loader label="Loading" fullPage />
        </PageContainer>
      </MainContainer>
    )
  }

  if (connectInternalRedirect && currentUri !== connectInternalRedirect) {
    return <Navigate to={connectInternalRedirect} />
  }

  return (
    <MainContainer>
      <SideNavigation />
      <Suspense fallback={<Loader label="Loading" fullPage />}>
        <Outlet />
      </Suspense>
    </MainContainer>
  )
}

export default AuthRoutes
