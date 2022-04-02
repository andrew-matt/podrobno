import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import Accordion from "./components/Accordion/Accordion";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";
import {OnOff} from "./components/OnOff/OnOff";

function sum(a: number, b: number) {
    alert(a + b)
}

/*sum(23,12);
sum(100, 300);*/

function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [switchOn, setSwitchOn] = useState<boolean>(false)

    console.log("App rendering")
    return (
        <div className={"App"}>
            {/*<UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}*/}
            <OnOff on={switchOn} onChange={setSwitchOn}/>
            {/*  <img
                src={"https://i.ytimg.com/vi/QIBNa-AIw8g/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAlxxFzxMagdsK2HGpW_HmTO71gCg"}/>
            <input/>
            <input value={"yo"} type="password"/>


            <PageTitle title={"This is APP component"}/>
            <PageTitle title={"My friends"}/>
            Article 1
            <Rating value={3}/>*/}
            <Accordion titleValue={"Menu"} collapsed={accordionCollapsed} onClick={() => setAccordionCollapsed(!accordionCollapsed)}/>
             {/* <Accordion titleValue={"Users"} collapsed={false}/>*/}
            <UncontrolledAccordion titleValue={"Menu"}/>
            {/* Article 2
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>*/}
            <Rating value={ratingValue} onClick={setRatingValue}/>
            {/*<Rating value={4}/>
            <Rating value={5}/>*/}
            <UncontrolledRating/>
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
