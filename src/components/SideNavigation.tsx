import { useReapitConnect } from "@reapit/connect-session"
import { NavResponsive, NavResponsiveOption } from "@reapit/elements"
import { FC } from "react"
import { useNavigate } from "react-router-dom"
import { reapitConnectBrowserSession } from "../constants"

export const getDefaultNavIndex = (pathname: string) => {
  switch (pathname) {
    case '/':
      return 1
    default:
      return 0
  }
}

export const SideNavigation: FC = () => {
  const { connectLogoutRedirect, connectIsDesktop } = useReapitConnect(reapitConnectBrowserSession)
  const navigate = useNavigate()

  const navOptions: NavResponsiveOption[] = [
    {
      itemIndex: 0,
    },
    {
      itemIndex: 1,
      text: 'Home',
      iconId: 'defaultMenu',
      callback: () => navigate('/'),
    },
  ]

  if (!connectIsDesktop) {
    navOptions.push({
      itemIndex: 100,
      callback: connectLogoutRedirect,
      isSecondary: true,
      iconId: 'logoutMenu',
      text: 'Logout',
    })
  }

  return <NavResponsive options={navOptions} defaultNavIndex={getDefaultNavIndex(window.location.pathname)} />
}

export default SideNavigation
