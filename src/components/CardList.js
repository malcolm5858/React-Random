import React from "react";
import Card from "./Card";

export default function CardList() {
  return (
    <div className="row">
      <div className="col-sm-4">
        <Card
          featureImage="https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg"
          title="Vacation at the beach"
          description="This is a nice place to vaction click to find out"
          link="https://www.google.com"
        />
      </div>
      <div className="col-sm-4">
        <Card />
      </div>
      <div className="col-sm-4">
        <Card />
      </div>
    </div>
  );
}
