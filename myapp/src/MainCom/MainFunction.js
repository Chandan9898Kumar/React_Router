import React, { useState } from "react"

const Enhance = (OriginalFunction) => {
    const Main = () => {
        const [count, setCount] = useState(0)
        const [number, setNumber] = useState(0)

        const MyIncrese = () => {
            setCount(count => count + 1)
        }

        const MyMulti = () => {
            setNumber(number => (number+1) * 2)
        }
        return (

            <>

                <OriginalFunction
                    count={count}
                    number={number}
                    MyInc={MyIncrese}
                    MyMul={MyMulti}

                />

            </>
        )

    }
    return Main;
}
export default Enhance;