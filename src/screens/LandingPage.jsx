import { Fragment } from 'react';
import info from '../utils/info';

const LandingPage = () => {
    return (
        <div className='container my-5'>
            <div className='text-center mb-5'>
                <h1 className='display-4 text-white bg-success p-3 rounded shadow'>
                    {info.title}
                </h1>
            </div>
            <div className="">
                {info.info.map((info) => {
                    return (
                        <Fragment key={info.title}>
                            <div className="row mb-4">
                                <div className="col-12">
                                    <h3 
                                        className={`text-${info.title === 'Temas Cubiertos' ? 'primary' : 'primary'} fw-bold text-center border-bottom pb-2 mb-3`}
                                    >
                                        {info.title}
                                    </h3>
                                </div>
                            </div>
                            <div className='row justify-content-center'>
                                {info.description.map((description, index) => {
                                    return (
                                        <div key={index} className='col-md-4 mb-3'>
                                            <div className={`card border-0 shadow h-100`}> 
                                                <div className='card-body text-center'>
                                                    <p className={`card-text ${info.title === 'Temas Cubiertos' ? 'text' : 'text-secondary'} fs-5`}> 
                                                        {description.info}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </Fragment>
                    );
                })}
            </div>
            <br />
            <hr className='w-75 mx-auto text-muted' />
            <div className='text-center mt-4'>
                <small className='text-muted'>&copy; 2024 Modulo 7. USIP.</small>
            </div>
        </div>
    );
};

export default LandingPage;