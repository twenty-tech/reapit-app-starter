import { MainContainer } from "@reapit/elements";
import { FC, PropsWithChildren } from "react";
import SideNavigation from "../components/SideNavigation";

export const AppLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <MainContainer>
      <SideNavigation />
      {children}
    </MainContainer>
  )
}

export default AppLayout
