import {Helmet} from "react-helmet";
import './App.css';

function App() {
  return (
    <div className="App">
       <Helmet>
       <meta property="og:url" content={`super ${window.location.href}`} />
                <meta charSet="utf-8" />
                <title>super {window.location.href}</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
      <p>{window.location.href === "https://showtimes-test.vercel.app/" && <iframe title="plaf' width="560" height="315" src="https://www.youtube.com/embed/2iZeN0qvPa0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>}</p>
      <p>{window.location.href === "https://showtimes-test-doironcharles.fragile.vercel.app/" && <iframe title="plouf" width="560" height="315" src="https://www.youtube.com/embed/-8j8xgkZxuE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>}</p>
    </div>
  );
}

export default App;
