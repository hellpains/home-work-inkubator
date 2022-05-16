import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'

function HW11() {
    const [value, setValue] = React.useState<number[]>([33, 66]);
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)

    const max=value[0]>value[1]

    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div>
                <span>{value1}</span>
                <SuperRange
                    setValue1={setValue1}
                />
            </div>

            <div style={{display:'flex',width:"270px",justifyContent:"space-between"} }>
                <span>{value[0]}</span>
                <SuperDoubleRange
                    value={value}
                    max={max}
                    setValue={setValue}
                />
                <span>{value[1]}</span>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
