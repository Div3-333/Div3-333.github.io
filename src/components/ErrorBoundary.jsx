import { Component } from 'react';

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error('Portfolio render failed', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="error-fallback">
          <p className="eyebrow">Render recovery</p>
          <h1>Something failed to load.</h1>
          <p>
            The portfolio hit a recoverable rendering issue. Refresh the page or contact me directly at
            divyanshu.s.cs@gmail.com.
          </p>
          <a className="button button-primary" href="mailto:divyanshu.s.cs@gmail.com">
            Email me
          </a>
        </main>
      );
    }

    return this.props.children;
  }
}
