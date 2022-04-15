import React, {useState} from 'react'

const useInput = initialValue => {                    // пользовательский хук состояния
    const [value, setValue] = useState(initialValue);

    return [
        {
            value, onChange: e => setValue(e.target.value)
        },
        () => setValue(value)
    ]
}

export default useInput