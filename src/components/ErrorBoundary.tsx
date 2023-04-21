import { PersistentNotification } from "@reapit/elements";
import { Component, ErrorInfo, PropsWithChildren } from "react";

export class ErrorBoundary extends Component<PropsWithChildren> {
  state = {
    hasError: false
  }

  constructor(props: PropsWithChildren) {
    super(props)
  }

  static getDerivedStateFromError() {
    return {
      hasError: true,
    }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('ERROR BOUNDARY CAUGHT', error.message, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <PersistentNotification isFullWidth isExpanded isInline intent="danger">
          Something went wrong here, try refreshing your page.
        </PersistentNotification>
      )
    }

    return <>{this.props.children}</>
  }
}

export default ErrorBoundary
