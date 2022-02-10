import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";

function sum(a: number, b: number) {
    alert(a + b)
}

/*sum(23,12);
sum(100, 300);*/

function App() {
    console.log("App rendering")
    return (
        <div>
            <img
                src={"https://i.ytimg.com/vi/QIBNa-AIw8g/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAlxxFzxMagdsK2HGpW_HmTO71gCg"}/>
            {/*<input/>
            <input value={"yo"} type="password"/>*/}


            <PageTitle title={"This is APP component"}/>
            <PageTitle title={"My friends"}/>
            Article 1
            <Rating value={3}/>
            <Accordion titleValue={"Menu"} collapsed={true}/>
            <Accordion titleValue={"Users"} collapsed={false}/>
            Article 2
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log("PageTitle rendering")
    return <h1>{props.title}</h1>;
}


export default App;
