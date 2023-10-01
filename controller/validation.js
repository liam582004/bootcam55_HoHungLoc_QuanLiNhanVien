function kiemTraRong(value, idCanhBao, mess) {
  var domTheSpan = document.getElementById(idCanhBao);
  //kiểm tra xem tham số value có rỗng hay ko
  if (value === "") {
    domTheSpan.innerHTML = mess;
    return false;
  } else {
    //Nội dung rỗng vào thể span khi người dùng ko bị lỗi
    domTheSpan.innerHTML = "";
    return true;
  }
}

//hàm giúp kiểm tra độ dài kí tự
function kiemTraDoDaiKiTu(value, min, max, idCanhBao, mess) {
  var domTheSpan = document.getElementById(idCanhBao);
  //kiểm tra
  if (value.length < min || value.length > max) {
    //sai
    domTheSpan.innerHTML = mess;
    return false;
  } else {
    //đúng
    domTheSpan.innerHTML = "";
    return true;
  }
}

//hàm kiểm tra email
function KiemTraEmail(email, idCanhBao, mess) {
  //dom tới span
  var domTheSpan = document.getElementById(idCanhBao);

  //lưu trữ đoạn mã re62gex giúp kiểm tra dữ liệu
  var regexEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  //regex để kiểm tra email có hợp lệ hay ko
  //dùng kiểm dữ liệu kết hợp cùng phương thứ match để regex để kiểm tra email có hợp lệ hay ko

  //dùng match khi muốn kiểm tra tên email cùa người dùng và đuôi @ là gì

  //dùng test() để kiểm tra email dúng hay ko
  var isValue = regexEmail.test(email);
  if (isValue) {
    //đúng
    domTheSpan.innerHTML = "";
    return true;
  } else {
    //sai
    domTheSpan.innerHTML = mess;
    return false;
  }
}

//hàm kiểm tra xem dữ liệu có phải là số hay ko
function kiemTRaSo(value, idCanhBao, mess) {
  var domTheSpan = document.getElementById(idCanhBao);
  //regex kiểm tra số
  var regexNumber = /^[0-9]+$/;
  //kiểm tra với regex
  var isNumber = regexNumber.test(value);
  if (isNumber) {
    //đúng
    domTheSpan.innerHTML = "";
    return true;
  } else {
    //sai
    domTheSpan.innerHTML = mess;
    return false;
  }
}

//hàm kiểm tra xem dữ liệu có phải là chữ hay ko
function kiemTRaChu(value, idCanhBao, mess) {
  var domTheSpan = document.getElementById(idCanhBao);
  //regex kiểm tra chữ
  var regexWord = /^[A-Za-z]+$/;
  //kiểm tra với regex
  var isWord = regexWord.test(value);
  if (isWord) {
    //đúng
    domTheSpan.innerHTML = "";
    return true;
  } else {
    //sai
    domTheSpan.innerHTML = mess;
    return false;
  }
}

//kiem tra ngay lm
function chuyenDoiNgay(ngay) {
  // Sử dụng phương thức split để tách ngày, tháng và năm
  var parts = ngay.split("/");
  if (parts.length === 3) {
    var thang = parseInt(parts[0], 10);
    var ngay = parseInt(parts[1], 10);
    var nam = parseInt(parts[2], 10);

    // Kiểm tra xem ngày, tháng và năm có hợp lệ không
    if (
      !isNaN(thang) &&
      !isNaN(ngay) &&
      !isNaN(nam) &&
      thang >= 1 &&
      thang <= 12 &&
      ngay >= 1 &&
      ngay <= 31 &&
      nam >= 1000 // Điều kiện này có thể thay đổi tùy theo yêu cầu
    ) {
      // Chuyển đổi thành đối tượng Date
      var ngayDate = new Date(nam, thang - 1, ngay);

      // Kiểm tra xem ngày chuyển đổi có hợp lệ không
      if (!isNaN(ngayDate.getTime())) {
        return ngayDate;
      }
    }
  }

  // Trả về null nếu không thể chuyển đổi
  return null;
}

//hàm kiểm tra người dùng có chọn chức vụ hay ko
//v
function kiemTRaChucVu(isSelect, idCanhBao, mess) {
  var domSelect = document.getElementById(isSelect).selectedIndex;
  var domTheSpan = document.getElementById(idCanhBao);

  if (domSelect == 0) {
    //sai
    domTheSpan.innerHTML = mess;
    return false;
  } else {
    //đúng
    domTheSpan.innerHTML = "";
    return true;
  }
}

// viết 1 hàm xử lí password có kí tự đặc biệt và một chữ viết hoa
function kiemTraMatKhau(password, idCanhBao, mess) {
  // Kiểm tra xem mật khẩu có ít nhất 1 ký tự số
  if (!/\d/.test(password)) {
    domTheSpan.innerHTML = mess;
    return false;
  }

  // Kiểm tra xem mật khẩu có ít nhất 1 ký tự in hoa
  if (!/[A-Z]/.test(password)) {
    domTheSpan.innerHTML = mess;
    return false;
  }

  // Kiểm tra xem mật khẩu có ít nhất 1 ký tự đặc biệt
  if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)) {
    domTheSpan.innerHTML = mess;
    return false;
  }

  // Nếu tất cả điều kiện đều đúng, trả về true
  domTheSpan.innerHTML = "";
  return true;
}
