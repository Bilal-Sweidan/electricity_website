import { Radio } from 'react-loader-spinner'

import './Loading.css'
export default function () {
    return (
        <div className="position-absolute" style={{ top: "calc( 50% - 75px)" , left : "calc( 50% - 75px)" }}>
            <Radio
                visible={true}
                height="150"
                width="150"
                color="#5C3C74"
                ariaLabel="radio-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>
    )
}
