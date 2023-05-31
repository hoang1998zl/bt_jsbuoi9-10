text_content += `
        <tr>
        <td>${nhanVien.taiKhoan}</td>
        <td>${nhanVien.tenNhanVien}</td>
        <td>${nhanVien.email}</td>
        <td>${nhanVien.matKhau}</td>
        <td>${nhanVien.ngayLam}</td>
        <td>${nhanVien.luongCoBan}</td>
        <td>${nhanVien.chucVu}</td>
        <td>${nhanVien.gioLam}</td>
        </tr>
        `;
console.log(text_content);

function ganGiaTriChoInput(
    taiKhoan,
    tenNhanVien,
    email,
    matKhau,
    ngayLam,
    luongCoBan,
    chucVu,
    gioLam
) {
    document.getElementById("tknv").value = taiKhoan;
    document.getElementById("name").value = tenNhanVien;
    document.getElementById("email").value = email;
    document.getElementById("password").value = matKhau;
    document.getElementById("datepicker").value = ngayLam;
    document.getElementById("luongCB").value = luongCoBan;
    document.getElementById("chucvu").value = chucVu;
    document.getElementById("gioLam ").value = gioLam;
}

function layGiaTriInput() {
    var taiKhoan = document.getElementById("tknv").value;
    var tenNhanVien = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var matKhau = document.getElementById("password").value;
    var ngayLam = document.getElementById("datepicker").value;
    var luongCoBan = document.getElementById("luongCB").value;
    var chucVu = document.getElementById("chucvu").value;
    var gioLam = document.getElementById("gioLam").value;

    var nhanVien = new NhanVien(
        taiKhoan,
        tenNhanVien,
        email,
        matKhau,
        ngayLam,
        luongCoBan,
        chucVu,
        gioLam
    );
    return nhanVien;
}