function NhanVien(
  taiKhoan,
  hoTen,
  email,
  matKhau,
  ngayLam,
  luongCoBan,
  chucVu,
  gioLam
) {
  this.taiKhoan = taiKhoan;
  this.hoTen = hoTen;
  this.email = email;
  this.matKhau = matKhau;
  this.ngayLam = ngayLam;
  this.luongCoBan = luongCoBan;
  this.chucVu = chucVu;
  this.gioLam = gioLam;
  this.tongLuong = 0;
  this.xepLoaiNV = "";

  this.tinhTongLuong = function () {
    switch (this.chucVu) {
      case "Sếp":
        return (this.tongLuong = Number(this.luongCoBan) * 3);
      case "Trưởng Phòng":
        return (this.tongLuong = Number(this.luongCoBan) * 2);
      case "Nhân Viên":
        return (this.tongLuong = Number(this.luongCoBan));
      default:
        return 0;
    }
  };

  this.xepLoaiNhanVien = function () {
    if (this.chucVu === "Sếp") {
      return 0;
    } else if (Number(this.gioLamTrongThang) >= 192) {
      return (this.xepLoaiNV = "Xuất sắc");
    } else if (Number(this.gioLamTrongThang) >= 176) {
      return (this.xepLoaiNV = "Giỏi");
    } else if (Number(this.gioLamTrongThang) >= 160) {
      return (this.xepLoaiNV = "Khá");
    } else {
      return (this.xepLoaiNV = "Trung bình");
    }
  };
}
