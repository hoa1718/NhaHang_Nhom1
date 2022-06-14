import Create from "./Create.js";
import Nhap from "./Nhap.js";
import Xoa from "./Xoa.js";
import axiosInstance from "../../config/callApi.js";
import React, { useEffect, useState } from "react";
import { useCookies } from 'react-cookie';
function TonKho(props) {
  const [isOpenCreate, setOpenCreate] = useState(false);
  const [isOpenImport, setOpenImport] = useState(false);
  const [isOpenExport, setOpenExport] = useState(false);
  const [dsNguyenLieu, setDsNguyenLieu] = useState([]);
  const [idCurrent, setIDCurrent] = useState();
  const [tenNguyenLieu, setTenNguyenLieu] = useState();
  const [cookie,setCookie]= useCookies();
  useEffect(() => {
    fetchNguyenLieu(tenNguyenLieu)

  }, [tenNguyenLieu])

  async function fetchNguyenLieu(tenNguyenLieu) {
    try {
      let query =''
      if(tenNguyenLieu)
        query = '?TenNguyenLieu='+tenNguyenLieu
      const resp = await axiosInstance.get('/TonKho/NguyenLieu'+query);
      console.log(resp.data);
      setDsNguyenLieu(resp.data.result)
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
    {cookie.role=="admin" ? <
    </>
  );
}

export default TonKho;
