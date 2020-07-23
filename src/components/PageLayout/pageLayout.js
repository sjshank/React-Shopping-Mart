import React from 'react';

const PageLayout = (props) => {
    return (
        <div>
            <div>{props.header}</div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-2 col-md-3">
                        {props.left}
                    </div>
                    <div className="col-lg-10 col-md-9">
                        {props.main}
                    </div>
                </div>
                {/* <div>{props.footer}</div> */}
            </div>
        </div>
    )
};

export default PageLayout;