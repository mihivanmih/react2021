import React from 'react'
import style from './FormControl.module.css'

export const Textarea = ({input, meta, ...props}) => {

    const hasError =  meta.touched && meta.error;

    return (
        <div className={ hasError && style.error}>
            { hasError && <div><span>{meta.error}</span></div>}
            <textarea { ...input } { ...props }></textarea>
        </div>
    )

}
