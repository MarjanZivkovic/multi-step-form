import Header from "../components/Header";

function ErrorPage() {
  return (
    <div className="container">
        <Header />
        <main className="form-container error-page">
          <div className="form-data thank-you-data">
            <h1>Oops! Something went wrong!</h1>
            <p>Could not find this page</p>
          </div>  
        </main>
    </div>
  )
}

export default ErrorPage;