import { Link, Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import Repository from "./component /Repositories";
import Contact from "./component /ContactMe"; 
import NotFound from "./component /NotFound";
import Home from "./component /Home";
import { useNavigate } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import FirstRepo from "./component /FirstRepo";
import octocat from './Octocat.png';
import { Helmet } from "react-helmet";


const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <div>
      <p>{error.message}</p>
      <button onClick={() => resetErrorBoundary}>Try Again</button>
    </div>
  );
};
console.log(octocat);
function App() {

  const navigate = useNavigate();
  return (
    <>
    <Helmet>
      <title> Daniels GitHub</title>
      <meta name="descripiton" content="Daniels Github Repository"/>
      <meta name="Keywords" content="Github, Daniel, Repositories, Dveloper"/>
    </Helmet>
      <div className="pt-10">
      <img className="w-1/12"  src={octocat} alt="github logo"/>
        <h1 className="mb-10 font-bold text-2xl">
          Daniels Git-Hub Repositories
        </h1>
        <hr></hr>
       
        <h1>AltSchool Assingment  2. GitHub Api </h1>
        <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => navigate("/")}
      >
        <nav className="" >
          <ul className="flex  items-center space-x-2 text-xl my-8 sm:justify-center">
            <li className=" text-emerald-400 rounded-lg px-3 py-2 font-medium hover:bg-slate-100 hover:text-slate-900">
              {" "}
              <Link to="/">Home</Link> 
            </li>
            <li className="text-emerald-400 focus:ring-violet-300 rounded-lg px-3 py-2  font-medium hover:bg-slate-100 hover:text-slate-900">
              {" "}
              <Link to="/Repositories">Repositories</Link>
            </li>
            <li className="text-emerald-400 rounded-lg px-3 py-2  font-medium hover:bg-slate-100 hover:text-slate-900">
              {" "}
              <Link to="/Contact">Contact Me</Link>
            </li>
           
          </ul>
        </nav>
        <Suspense fallback={<div>Please Wait</div>}>
        <Routes>
            <Route path="/" element={<Home/> } />
            <Route path="/Repositories" element={<Repository/>} >
              <Route path="/Repositories/firstrepo" element={<FirstRepo/>}>

              </Route>
            </Route>

            <Route path="/Contact" element={<Contact/>} />

            <Route path="*" element={<NotFound />} />
          </Routes>
          </Suspense>
          </ErrorBoundary>
          </div>
     
          </>
          

          )

  
      
     
   
  
}

export default App
