arrNhanVien = [];

function renderGiaoDien() {

  var content = "";


  for (i = 0; i < arrNhanVien.length; i++) {
    var nhanVien = new NhanVien();
    var nhanVienItem = arrNhanVien[i];
    Object.assign(nhanVien, nhanVienItem);
    var tongLuong = nhanVien.tongLuong();
    var xepLoai = nhanVien.xepLoai();
    content += `
        <tr>
        <td>${nhanVien.taiKhoan}</td>
        <td>${nhanVien.tenNhanVien}</td>
        <td>${nhanVien.email}</td>
        <td>${nhanVien.ngayLam}</td>
        <td>${nhanVien.chucVu}</td>
        <td>${tongLuong}</td>
        <td>${xepLoai}</td>
        <td>
          <button onclick="suaNhanVien('${nhanVien.taiKhoan
      }')" class="btn btn-warning" data-toggle="modal"
      data-target="#myModal">
            <i class="fa-solid fa-pen"></i>
          </button>
          <button onclick="xoaNhanVien('${nhanVien.taiKhoan
      }')" class="btn btn-danger">
            <i class="fa-solid fa-trash"></i>
          </button>
        </td>
        </tr>
        `;
  }

  document.getElementById("tableDanhSach").innerHTML = content;
}

function themNhanVien() {
  var nhanVien = layGiaTriInput();
  if (nhanVien) {
    arrNhanVien.push(nhanVien);

    renderGiaoDien();

    // ganGiaTriChoInput("", "", "", "", "", "", "", "");
  };
}


function xoaNhanVien(taiKhoan) {
  var index = timViTriNhanVien(taiKhoan);
  if (index != -1) {
    arrNhanVien.splice(index, 1);
    renderGiaoDien();
  }
}

function suaNhanVien(taiKhoan) {
  var index = timViTriNhanVien(taiKhoan);
  var nhanVien = arrNhanVien[index];
  ganGiaTriChoInput(
    nhanVien.taiKhoan,
    nhanVien.tenNhanVien,
    nhanVien.email,
    nhanVien.matKhau,
    nhanVien.ngayLam,
    nhanVien.luongCoBan,
    nhanVien.chucVu,
    nhanVien.gioLam,
  );
}

function capNhatThongTin() {
  var nhanVienDaSua = layGiaTriInput();
  console.log(nhanVienDaSua);
  var index = timViTriNhanVien(nhanVienDaSua.taiKhoan);
  arrNhanVien[index] = nhanVienDaSua;
  renderGiaoDien();
}

function filterNhanVien(arrNhanVien) {
  var data1 = arrNhanVien;
  console.log(data1);
  

}

function checkNhanVien() {

}