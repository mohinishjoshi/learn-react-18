import Card from "components/card/Card";
import React from "react";

const testData = [
    { name: "Dan Abramov", avatar_url: "https://avatars.githubusercontent.com/u/810438?v=4", company: "@facebook" },
    { name: "Mohinish Joshi", avatar_url: "https://avatars.githubusercontent.com/u/29919861?v=4", company: "Goldman Sachs" },
    { name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook" },
];

function CardList() {
    return (
        <div>
            {testData.map(profile => <Card {...profile} />)}
            {/* <Card {...testData[0]} />
            <Card {...testData[1]} /> */}
        </div>
    );
}

export default CardList;