import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card } from "antd";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../Button.jsx";
const { Meta } = Card;

const ItemMenu = ({ params, id, name, price }) => {
  const dispatch = useDispatch();
  const value = useSelector(state => state);
  return (
    <div>
      <Card
        style={{
          width: 300,
        }}
        cover={
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        }
        actions={[
          <>
            <Button
              onClick={() =>
                dispatch({
                  type: "INCREMENT",
                  table: params.table,
                  id: id,
                })
              }
              text="Pesan"
            />
          </>,
        ]}
      >
        <Meta title={name} />
        <Meta description={price} />
      </Card>
    </div>
  );
};
export default ItemMenu;
