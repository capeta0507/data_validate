# Form input 資料驗證(js/function)
###### tags: `form` `js/function`

Validate_function.js 是一個方便用於表單驗證的 JavaScript 函式庫，透過 Validate_function.js 的引用你可以更簡單且完整的處理表單驗證的問題。

### index.html
採用傳統表單 + Bootstrap + jQuery
```htmlmixed=
<!DOCTYPE html>
<html lang="en" >
<head>
  <meta charset="UTF-8">
  <title>Form Validate</title>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
  <link rel="stylesheet" href="./style.css">
</head>
<body>
<div class="container">
  <h1>validate.js 範例</h1>
  <form id="mainForm">
    <div class="form-row">
      <div class="form-group col-12">
        <label for="email">Email</label>
        <input id="email" class="form-control" type="text" placeholder="Email" name="email">
        <div id="email_message" class="messages"></div>
      </div>
    </div>
    <div class="form-row">
      <div class="form-group col-md-6">
          <label for="password">密碼</label>
            <input id="password" class="form-control" type="password" placeholder="Password" name="password">
          <div id="password_message" class="messages"></div>
      </div>
      <div class="form-group col-md-6">
        <label for="confirm_password">確認密碼</label>
        <input id="confirm_password" class="form-control" type="password" placeholder="Confirm password" name="confirm_password">
        <div id="confirm_password_message" class="messages"></div>
      </div>
    </div>
    
    <div class="form-row">
      <div class="form-group col-md-6">
        <label for="username">使用者名稱</label>
        <input id="username" class="form-control" type="text" placeholder="Username" name="username">
        <div id="username_message" class="messages"></div>
      </div>
      <div class="form-group col-md-6">
        <label for="birthdate">生日</label>
        <input id="birthdate" class="form-control" type="date" placeholder="YYYY-MM-DD" name="birthdate">
        <div id="birthdate_message" class="messages"></div>
      </div>
    </div>
    <div class="form-row">
      <div class="form-group col-md-6">
        <label for="country">所在地</label>
          <select id="country" class="form-control" name="country">
            <option value="0">(選取場所)</option>
            <option value="KS">高雄</option>
            <option value="TC">台南</option>
            <option value="TP">台北</option>
          </select>
          <div id="country_message" class="messages"></div>
      </div>
      <div class="form-group col-md-6">
        <label for="mobile">手機</label>
        <input id="mobile" class="form-control" type="text" placeholder="09**123456手機格式" name="mobile">
        <div id="mobile_message" class="messages"></div>
      </div>
    </div>
    <button type="submit" class="btn btn-primary">註冊</button>
  </form>
</div>
<!-- partial -->
<script  src="./validate_function.js"></script>
<script src="./index.js"></script>
</body>
</html>
```

### style.css
CSS 檔案，描述畫面格式

```css=
.container {
  width: 900px;
  margin: 0 auto;
}
.container h1 {
  margin: 20px;
  text-align: center;
}
.container form {
  padding: 20px;
  background: #EBF0F4;
  border-radius: 10px;
}
.help-block.error {
  margin-bottom: 5px;
}
.messages{
  margin: 10px 5px;
  color: #dc3545
}
```

### index.js
資料驗證寫在 javascript 檔案中
```javascript=
// 網頁 load 完成 ready
$().ready(function(){
  $("#mainForm").on("submit",function(e){
    e.preventDefault();
    submitHandle(e);
  })
});

// *-----------------------------------------*
// *-- Submit 處理程序 ------------------------*
// *-- 驗證 1 資料必須填寫 ---------------------*
// *-- 驗證 2 Regex 資料驗證 ------------------*
// *-- 驗證 3 其他特殊規定 ---------------------*
// *-----------------------------------------*
function submitHandle(e){
  // 驗收資料
  let my_email = $("#email").val().trim();
  let my_password = $("#password").val().trim();
  let my_confirm_password = $("#confirm_password").val().trim();
  let my_username = $("#username").val().trim();
  let my_birthdate = $("#birthdate").val().trim();
  let my_country = $("#country").val().trim();
  let my_mobile = $("#mobile").val().trim();
  // console.log(my_email);
  // console.log(my_email.length);
  // message
  let my_email_message = $("#email_message");
  let my_password_message = $("#password_message");
  let my_confirm_password_message = $("#confirm_password_message");
  let my_username_message = $("#username_message");
  let my_birthdate_message = $("#birthdate_message");
  let my_country_message = $("#country_message");
  let my_mobile_message = $("#mobile_message");

  // console.log(my_email_message.html());

  let error_Count = 0;
  // TODO: 1. 所有資料必填 str.length

  // Email
  // console.log('email len : ',my_email.length);
  if (x_isEmpty(my_email)){
    my_email_message.html("Email 是必填的欄位");
    error_Count ++;
  } else {
    my_email_message.html("");
  }

  // password
  if (x_isEmpty(my_password)){
    my_password_message.html("密碼 是必填的欄位");
    error_Count ++;
  } else {
    my_password_message.html("");
  }

  // confirm_password
  if (x_isEmpty(my_confirm_password)){
    my_confirm_password_message.html("確認密碼 是必填的欄位");
    error_Count ++;
  } else {
    my_confirm_password_message.html("");
  }

  // username
  if (x_isEmpty(my_username)){
    my_username_message.html("使用者名稱 是必填的欄位");
    error_Count ++;
  } else {
    my_username_message.html("");
  }

  // birthdate
  if (x_isEmpty(my_birthdate)){
    my_birthdate_message.html("生日 是必填的欄位");
    error_Count ++;
  } else {
    my_birthdate_message.html("");
  }

  // country (不能為 0)
  if (my_country === '0'){
    my_country_message.html("所在地 是必填的欄位");
    error_Count ++;
  } else {
    my_country_message.html("");
  }

  // mobile
  if (x_isEmpty(my_mobile)){
    my_mobile_message.html("手機 是必填的欄位");
    error_Count ++;
  } else {
    my_mobile_message.html("");
  }

  console.log("TODO 1",error_Count);
  if (error_Count > 0 ){
    // 代表  TODO 1 有錯誤，不必檢查下去
    return false;
  }

  // TODO: 2. Regex 驗證

  // Email
  if (x_isEmail(my_email)){
    my_email_message.html("");
  }else{
    my_email_message.html("Email 無效");
    error_Count ++;
  }

  // // password
  // if (x_isPassword(my_password)){
  //   my_password_message.html("");
  // }else{
  //   my_password_message.html("密碼無效，至少8位英數字");
  //   error_Count ++;
  // }
  // password 強度
  // 密碼的強度必須是包含大小寫字母和數位的組合，不能使用特殊字元，長度在8-10之間。
  if (x_isPassword_strong(my_password)){
    my_password_message.html("");
  }else{
    my_password_message.html("密碼必須包含大小寫字母和數位的組合，使用特殊字元(!@#$%^&*?)，長度在8~20之間");
    error_Count ++;
  }

  // // confirm_password
  if (x_isPassword(my_confirm_password)){
    my_confirm_password_message.html("");
  }else{
    my_confirm_password_message.html("密碼無效，至少8位英數字");
    error_Count ++;
  }

  // // 密碼雙重確認
  if (my_password === my_confirm_password ){
    my_confirm_password_message.html("");
  }else{
    my_confirm_password_message.html("密碼確認錯誤");
    error_Count ++;
  }

  // username (有填就好)

  // mobile
  if (isMobile(my_mobile)){
    my_mobile_message.html("");
  }else{
    my_mobile_message.html("手機無效，必須符合台灣規格");
    error_Count ++;
  }

  console.log("TODO 2",error_Count);
  if(error_Count > 0){
    return false;
  }

  // TODO: 3.特別規定

  // 所在地 必須是高雄
  if (my_country === "KS") {
    my_country_message.html("");
  }else{
    my_country_message.html("本檔活動在高雄舉行");
    error_Count ++;
  }

  console.log("TODO 3",error_Count);
  if(error_Count > 0) {
    // 資料驗證有誤
    return false;
  }else{
    // 資料填寫完卻正確
    let my_Data = {
      email:my_email,
      password:my_password,
      username:my_username,
      birthdate:my_birthdate,
      country:my_country,
      mobile:my_mobile
    }
    console.table(my_Data)
    alert("填寫完成...謝謝");
    // 進行後續處理
  }
}
```

### validate_function.js
撰寫資料檢驗函式
```javascript=
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
  let reg_password = /[a-zA-Z0-9]{8,}/;
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
// Mobile
function isMobile(dataStr){
  let reg_mobile = /^09\d{8}$/;
  if (reg_mobile.test(dataStr)){
    return true;
  }else{
    return false;
  }
}

```
