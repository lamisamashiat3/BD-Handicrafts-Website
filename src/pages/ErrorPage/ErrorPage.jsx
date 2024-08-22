import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
   const error = useRouteError();
  

    return (
        <div className='text-center'>
            <h2>Error!!!!!</h2>
            <p>{error.statusText || error.message }</p>
         {
            error.status === 404 && <div>
                <h3>Page not founded </h3>
                <Link to = '/'><button className="btn btn-primary">Go Back</button></Link>
                </div>
         }
        
        
        </div>
    );
};

export default ErrorPage;