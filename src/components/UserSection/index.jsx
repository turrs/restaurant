import { Avatar } from "antd";
import React from "react";
import { UserOutlined } from "@ant-design/icons";
const UserSection = () => {
  return (
    <div className="flex flex-row items-center pl-6">
      <div className="bg-blue opacity-40 flex justify-center items-center w-[50px] h-[50px] rounded-full">
        <Avatar size={"100%"} icon={<UserOutlined />} />
      </div>
      <div className="flex justify-start pl-4 flex-col">
        <div>
          <p className="mt-0 pt-0 pb-0 mb-0 text-black font-semibold">
            Welcome, Fatur !
          </p>
        </div>
        <div>
          <p className="mt-0 pt-0 pb-0 mb-0 text-gray">
            Cashier on Cashyour App
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserSection;
