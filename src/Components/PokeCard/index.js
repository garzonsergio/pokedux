import React from "react";
import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import { StarOutlined } from "@ant-design/icons";

const PokeCard = ({ name, url }) => {
  return (
    <Card
      title={name}
      cover={<img src={url} alt={name} />}
      extra={<StarOutlined />}
    >
      <Meta description="Plant, Water" />
    </Card>
  );
};
export { PokeCard };
