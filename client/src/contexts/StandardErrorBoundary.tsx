import React, { ReactNode } from "react";

interface State {
    hasError: boolean,
    error?: Error
}

interface Props {
    children?: ReactNode
}

export default class StandardErrorBoundary extends React.Component<Props, State> {

    public state: State = {
        hasError: false,
        error: undefined
    }

    constructor(props: Props) {
        super(props);
    }

    public static getDerivedStateFromError(error: Error) {
        return {
            hasError: true,
            error,
        }
    }

    public componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
        console.log(`Error caught!`);
        console.error(error)
    }

    public render(): React.ReactNode {
        if (this.state.hasError) {
            return <>
                <h1>Houston, we have a problem 😬😬</h1>
                <h3>please consider reporting this error</h3>
            </>
        } else {
            return this.props.children;
        }
    }
}