import './Table.css'
function ThucDon(props) {
  return (
    
      <><h2>Thực đơn</h2>
      <a className='btn-create btn'></a>
      <div className="container-fluid">
      <div className="card shadow mb-4">
        <div className="card-body">
          <div className="table-responsive">
            <table
              className="table table-bordered table-menu"
              id="dataTable"
              width="100%"
              cellSpacing={0}
              style={{ textAlign: "center", lineHeight: 10 }}
            >
              <tbody>
                <tr>
                  <th>Mã Món</th>
                  <th>Tên Món</th>
                  <th>Phân Loại</th>
                  <th>Hình Ảnh</th>
                  <th>Giá Tiền</th>
                  <th />
                </tr>
                <tr>
                  <td>1</td>
                  <td>Gà rán</td>
                  <td>Món chính</td>
                  <td>
                    <img
                      style={{ width: 70, height: 70 }}
                      alt="food"
                      src="https://cafefcdn.com/thumb_w/650/203337114487263232/2022/2/17/photo1645063628413-1645063628542413680828.jpg" />
                  </td>
                  <td>20000</td>
                  <td style={{ width: "200px !important" }}>
                    <a className="btn-func" href=" ">
                      <i className="fas fa-solid fa-pen-to-square" />
                      <span className='toolTip'>Thay đổi</span>
                    </a>
                    |
                    <a className="btn-func" href=" ">
                      <i className="fas fa-solid fa-info" />
                      <span className='toolTip'>Chi tiết</span>
                    </a>
                    |
                    <a className="btn-func" href=" ">
                      <i className="fa-solid fa-trash" />
                      <span className='toolTip'>Xoá</span>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div></>
   
  );
}

export default ThucDon;
