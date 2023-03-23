import { ReapitConnectBrowserSession } from '@reapit/connect-session'

// Needs to be a singleton as the class is stateful
export const reapitConnectBrowserSession = new ReapitConnectBrowserSession({
  connectClientId: import.meta.env.VITE_CONNECT_CLIENT_ID,
  connectOAuthUrl: 'https://connect.reapit.cloud',
  connectUserPoolId: import.meta.env.VITE_CONNECT_USER_POOL_ID,
})
