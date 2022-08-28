import React from 'react'
import Enhance from '../MainCom/MainFunction'
import { useNavigate } from "react-router-dom";

const MyMulti = ({ MyMul, number }) => {
    const Navigate = useNavigate()

    return (
        <>
            <h1>This is my Multiplication  Page  :</h1>
            My Number : {number} <br />

            <button
            type='submit'
            onClick={MyMul}
            >Mutliply</button>
            <br /><br />
            To Go Back Click below <br />

            <button
                type="submit"
                onClick={() => Navigate(-1)}
            >Go Back</button>

        </>
    )
}

export default Enhance(MyMulti);
