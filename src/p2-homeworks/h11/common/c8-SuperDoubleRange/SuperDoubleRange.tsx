import React from 'react'
import {Box, Slider} from "@mui/material";

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    value: number[]
    setValue: (value: any) => void
    max: boolean
    // min, max, step, disable, ...
}

function valuetext(value: number) {
    return `${value}`;
}


const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        value, setValue,
        onChangeRange,
        max
        // min, max, step, disable, ...
    }
) => {

    const handleChange = (
        event: Event,
        newValue: number | number[],
        activeThumb: number,
    ) => {
        if (!Array.isArray(newValue)) {
            return;
        }

        if (activeThumb === 0) {
            setValue([Math.min(newValue[0], value[1] - 1), value[1]]);
        } else {
            setValue([value[0], Math.max(newValue[1], value[0] + 1)]);
        }
    };


    // const [value, setValue] = React.useState<number[]>([33, 66]);

    // const handleChange = (event: Event, newValue: number | number[]) => {
    //     setValue(newValue as any);
    // };

    return (
        <>
            <Box sx={{width: 200}}>

                <Slider
                    disabled={max}
                        getAriaLabel={() => 'Temperature range'}
                        value={value}
                        onChange={handleChange}
                    // valueLabelDisplay="auto"
                        getAriaValueText={valuetext}
                        disableSwap
                />
            </Box>
        </>
    )
}

export default SuperDoubleRange
