import "./HoaDon.css";
import Detail from "./Detail";
import Edit from "./Edit";
import React, { useEffect, useState } from "react";
import { useCookies } from 'react-cookie';
import axiosInstance from "../../config/callApi";
function HoaDon(props) {
  const [isOpenDetail, setOpenDetail] = useState(false);
  const [isOpenEdit, setOpenEdit] = useState(false);
  const [hoaDon, setHoaDon] = useState([])
  const [current, setCurrent] = useState({})
  const [search, setSearch] = useState()
  const [cookie,setCookie]= useCookies();
  useEffect(() => {
    fetchNguyenLieu(search)
  }, [search])

  async function fetchNguyenLieu(search) {
    try {
      let query =''
      if(search)
        query = '?date=' + search
      const resp = await axiosInstance.get('/HoaDon'+query);
      console.log(resp.data);
      setHoaDon(resp.data.result)
    } catch (err) {
      console.error(err);
    }
  }

  async function xoaHoaDon(id) {
    try {
      const resp = await axiosInstance.delete('/HoaDon/'+id);
      console.log(resp.data);
      if(resp.data.ok)
        fetchNguyenLieu()
    } catch (err) {
      console.error(err);
    }
  }

  return (
    {cookie.role=="admin"}
  );
}

export default HoaDon;
