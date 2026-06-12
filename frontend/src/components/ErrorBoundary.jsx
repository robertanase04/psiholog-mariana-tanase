import { Component } from "react";
import { Link } from "react-router-dom";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-beige-100 px-4">
          <div className="text-center max-w-md">
            <h1 className="font-heading text-3xl font-medium text-beige-900 mb-4">
              Ceva nu a funcționat corect
            </h1>
            <p className="text-beige-700 mb-6">
              Ne cerem scuze pentru inconveniență. Te rugăm să reîncarci pagina.
            </p>
            <Link
              to="/"
              onClick={() => this.setState({ hasError: false })}
              className="inline-block bg-olive-500 hover:bg-olive-600 text-white rounded-full px-6 py-3 font-medium transition-colors"
            >
              Înapoi la pagina principală
            </Link>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
