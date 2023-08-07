import * as React from "react";
import MediaCard from "./Cards";


// props_arr = [{url.....}]
// {props: [{url.....}]}
export default function Home(props){
    console.log(props)
return(<>
<MediaCard props = {props.props_arr[0]} setPage={props.setPage}></MediaCard>
</>)
}