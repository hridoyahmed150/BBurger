import React from 'react';
import Model from './../../components/UI/Model/Model';
import Aux from './../Auxiliary';

const withErrorHandeler=(WrappedComponent)=>{
    return (props)=>{
        return (
            <Aux>
                <Model show>
                    somthing wrong happend
                </Model>
                <WrappedComponent {...props} />
            </Aux>
        )
    }
}
export default withErrorHandeler;