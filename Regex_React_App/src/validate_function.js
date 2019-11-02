// 撰寫資料檢驗的函式

// 資料空白
function x_isEmpty(dataStr){
  if(dataStr.trim().length == 0){
    return true;
  }else{
    return false;
  }
}
// 檢查 eMail
function x_isEmail(dataStr){
  let reg_Email = /^\w+((-\w+)|(.\w+))@[A-Za-z0-9]+((.|-)[A-Za-z0-9]+).[A-Za-z]+$/;
  if (reg_Email.test(dataStr)){
    return true;
  }else{
    return false;
  }
}
// >=8位數字，簡易密碼
function x_isPassword(dataStr){
  let reg_password = /[a-zaA-Z0-9]{8,}/;
  if (reg_password.test(dataStr)){
    return true;
  }else{
    return false;
  }
}
// 強型態密碼檢查 (8~20)
function x_isPassword_strong(dataStr){
  // 密碼的強度必須是包含大小寫字母和數位的組合，不能使用特殊字元，長度在8~20之間。
  // let reg_password = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;

  // 密碼的強度必須是包含大小寫字母和數位的組合，使用特殊字元(!@#$%^&*?)，長度在8~20之間。
  let reg_password = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*?]).{8,20}$/;

  if (reg_password.test(dataStr)){
    return true;
  }else{
    return false;
  }
}
// 是不是手機(必須以09 為開頭)
function x_isMobile(dataStr){
  let reg_mobile = /^09\d{8}$/;
  if (reg_mobile.test(dataStr)){
    return true;
  }else{
    return false;
  }
}

// 判斷是不是日期 yyyy-mm-dd 有效格式 & 有效年、月、日
function x_isDate(dataStr) {
  var bits = dataStr.split('-');
  var y = bits[0],
      m = bits[1],
      d = bits[2];
  // Assume not leap year by default (note zero index for Jan)
  var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  // If evenly divisible by 4 and not evenly divisible by 100,
  // or is evenly divisible by 400, then a leap year
  if ((!(y % 4) && y % 100) || !(y % 400)) {
      daysInMonth[1] = 29;
  }
  return !(/\D/.test(String(d))) && d > 0 && d <= daysInMonth[--m]
}

// 是不是純數字(整數)(Integer)
function x_isIntegerNumber(dataStr) {
  var reg = /^[0-9]*$/;
  return reg.test(dataStr);
}

// 是不是純數字(浮點數)(Floating point number)
function x_isFloatNumber_dot(dataStr) {
  var reg = /^[0-9]+(\.[0-9]{1,10})?$/;   //允許小數點
  return reg.test(dataStr);
}

// 產生呼叫模組
module.exports = {
  x_isEmpty,
  x_isEmail,
  x_isPassword,
  x_isPassword_strong,
  x_isMobile,
  x_isDate,
  x_isIntegerNumber,
  x_isFloatNumber_dot
}