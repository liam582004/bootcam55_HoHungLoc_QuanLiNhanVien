var dsvn = new DanhSachNhanVien();

function getEle(id) {
  return document.getElementById(id);
}

function layThongTinNhanVien() {
  //DOM lấy value
  var taiKhoan = getEle("tknv").value;
  var hoTen = getEle("name").value;
  var email = getEle("email").value;
  var matKhau = getEle("password").value;
  var ngayLam = getEle("datepicker").value;
  var luongCoBan = getEle("luongCB").value;
  var chucVu = getEle("chucvu").value;
  var gioLam = getEle("gioLam").value;

  kiemTraRong(taiKhoan, "tbTKNV", "Vui lòng ko bỏ trống tài khoản");

  //tạo đối tượng
  var nv = new NhanVien(
    taiKhoan,
    hoTen,
    email,
    matKhau,
    ngayLam,
    luongCoBan,
    chucVu,
    gioLam
  );

  nv.tinhTongLuong();
  nv.xepLoaiNhanVien();

  console.log(nv);
  return nv;
}

/**
 * thêm NV
 */
function themNhanVien() {
  var nv = layThongTinNhanVien();

  //add NV vào dsnv
  dsvn._themNV(nv);

  //render dsnv ra UI
  renderListNV(dsvn.arr);
}

function renderListNV(data) {
  var content = "";

  for (var i = 0; i < data.length; i++) {
    var nv = data[i];
    content += `
<tr>
    <td>${nv.taiKhoan}</td>
    <td>${nv.hoTen}</td>
    <td>${nv.email}</td>
    <td>${nv.ngayLam}</td>
    <td>${nv.chucVu}</td>
    <td>${nv.tongLuong}</td>
    <td>${nv.xepLoaiNV}</td>
    
</tr>
`;
  }
  getEle("tableDanhSach").innerHTML = content;
}
