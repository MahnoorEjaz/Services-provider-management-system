import React from 'react'


function Containt_Home(props) {
    return (
        <>
            <div className='Contant' style={{display:'flex'}}>
                <p>
                    {props.text}
                </p>
            </div>
        </>
    )
}

export default Containt_Home