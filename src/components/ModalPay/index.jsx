import { InputNumber, Modal } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "../Button.jsx";

const ModalPay = ({ menu, totalPaying }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [totalPay, setTotalPay] = useState();
  const [tunai, setTunai] = useState();
  const [kembalian, setKembalian] = useState(0);
  const dispatch = useDispatch();
  const showModal = (e, totalPaying) => {
    const sum = totalPaying => {
      return totalPaying.reduce((accumulator, value) => {
        return accumulator + value;
      }, 0);
    };
    setTotalPay(sum(totalPaying));
    setIsModalOpen(true);
  };

  const handleOk = (totalPay, tunai) => {
    if (tunai >= totalPay) {
      dispatch({ type: "PAY", profit: totalPay });
      setIsModalOpen(false);
    } else {
      alert("Uang tunai kurang");
    }
  };
  const onChange = (value, totalPay) => {
    setTunai(value);
    setKembalian(totalPay - value);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const payBilling = (e, totalPaying) => {
    const sum = totalPaying => {
      return totalPaying.reduce((accumulator, value) => {
        return accumulator + value;
      }, 0);
    };
  };
  return (
    <>
      <div className="w-[80%]">
        <Button text="Pay" onClick={e => showModal(menu, totalPaying)}></Button>
      </div>
      <Modal
        title="Pay"
        open={isModalOpen}
        onOk={() => handleOk(totalPay, tunai)}
        onCancel={handleCancel}
      >
        <p> Total Bayar : {totalPay}</p>
        <p>Bayar Tunai :</p>
        <InputNumber
          min={1000}
          max={9999999999}
          defaultValue={0}
          onChange={e => onChange(e, totalPay)}
        />
        <p> Total Kembalian : </p>
        {totalPay > tunai ? <p>Uang Tunai Kurang</p> : <p>{kembalian}</p>}
      </Modal>
    </>
  );
};

export default ModalPay;
