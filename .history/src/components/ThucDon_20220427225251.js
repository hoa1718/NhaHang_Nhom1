function ThucDon(props) {
    return (
      <div class="container-fluid">
                    


      <h2>Thực đơn</h2>
      
      <p>
          <a href="">Create New</a>
      </p>
      
      <div class="container-fluid">
          <!-- DataTales Example -->
          <div class="card shadow mb-4">
              <div class="card-body">
                  <div class="table-responsive">
                      <table class="table table-bordered table-menu" id="dataTable" width="100%" cellspacing="0" style="text-align: center; line-height: 10px;">
                          <tr>
                              <th>
                                  Mã Món
                              </th>
                              <th>
                                  Tên Món
                              </th>
                              <th>
                                  Phân Loại
                              </th>
                              <th>
                                  Hình Ảnh
                              </th>
                              <th>
                                  Giá Tiền
                              </th>
                              <th></th>
                          </tr>
      
                              <tr>
                                  <td>
                                      1
                                  </td>
                                  <td>
                                      G&#224; r&#225;n
                                  </td>
                                  <td>
                                      M&#243;n ch&#237;nh
                                  </td>
                                  <td>
                                      <img style="width:70px;height:70px" alt="food" src="/Image/kfc.jpg" />
                                  </td>
                                  <td>
                                      20000
                                  </td>
                                  <td style="width:200px !important;">
                                      <a class="btn-func" href="/MonAns/Edit/1"><i class="fas fa-solid fa-pen-to-square"></i></a>
                                      |
                                      <a class="btn-func" href="/MonAns/Details/1"><i class="fas fa-solid fa-info"></i></a>
                                      |
                                      <a class="btn-func" href="/MonAns/Delete/1"><i class="fa-solid fa-trash"></i></a>
                                  </td>
                              </tr>
                      </table>
                  </div>
              </div>
          </div>
      
      </div>  
    );
  }
  
  export default ThucDon;