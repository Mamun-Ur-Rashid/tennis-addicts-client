import React from 'react';
import SingleToy from '../../shared/singleToy/SingleToy';
import useTitle from '../../hook/useTitle';

const ViewDetails = () => {
    useTitle("ViewDetails");
    return (
        <div>
            <SingleToy></SingleToy>
        </div>
    );
};

export default ViewDetails;