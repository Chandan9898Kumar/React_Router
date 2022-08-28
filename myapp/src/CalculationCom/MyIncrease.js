import React from "react";
import Enhance from "../MainCom/MainFunction";
import { useNavigate } from "react-router-dom";
const Increase=(props)=> {
const Navigate =useNavigate()
const {count,MyInc}=props

return (
<>
<h1>This is my Increase Page</h1>

My Count : {count}<br />
<button
type="submit"
onClick={MyInc}
>Click here
</button>
<br />

To Go Back Click below <br />
<button
type="submit"
onClick={()=> Navigate(-1)}
>Go Back</button><br />
<br />
<hr />

To go to Multplication page 
<button
onClick={()=> Navigate('/MyMulti')}
>Click</button>












</>




)




}
export default Enhance(Increase);