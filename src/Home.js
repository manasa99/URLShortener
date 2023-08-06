import * as React from "react";
import MediaCard from "./Cards";


// props_arr = [{url.....}]
// {props: [{url.....}]}
export default function Home(props_arr){
return(<>
<MediaCard props = {props_arr.props_arr[0]} ></MediaCard>
</>)
}