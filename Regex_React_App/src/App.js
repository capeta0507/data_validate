import React,{useState} from 'react';
import { x_isEmpty, x_isEmail, x_isPassword, x_isMobile} from './validate_function'
import './App.css';

const App = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [conPassword, setConPassword] = useState('')
  const [username, setUsername] = useState('')
  const [place, setPlace] = useState('')
  const [phone, setPhone] = useState('')
  const [birth, setBirth] = useState('')
  // 驗證變數
  const [msgEmail, setMsgEmail] = useState('')
  const [msgPass, setMsgPass] = useState('')
  const [msgConPass, setMsgConPass] = useState('')
  const [msgUser, setMsgUser] = useState('')
  const [msgBirth, setMsgBirth] = useState('')
  const [msgPlace, setMsgPlace] = useState('')
  const [msgPhone, setMsgPhone] = useState('')

  let error_Count = 0;

  const submit = (e) => {
    e.preventDefault()
    if(x_isEmpty(email)){
      setMsgEmail('Email 是必填的欄位');
      error_Count ++;
    } else {
      setMsgEmail('');
    }
    if(x_isEmpty(password)){
      setMsgPass('密碼 是必填的欄位');
      console.log('密碼必填')
      error_Count ++;
    } else {
      setMsgPass('');
    }
    if(x_isEmpty(conPassword)){
      setMsgConPass('確認密碼 是必填的欄位');
      error_Count ++;
    } else {
      setMsgConPass('');
    }
    if(x_isEmpty(username)){
      setMsgUser('使用者名稱 是必填的欄位');
      error_Count ++;
    } else {
      setMsgUser('');
    }
    if(x_isEmpty(birth)){
      setMsgBirth('生日 是必填的欄位');
      error_Count ++;
    } else {
      setMsgBirth('');
    }
    if(x_isEmpty(place)){
      setMsgPlace('所在地 是必填的欄位');
      error_Count ++;
    } else {
      setMsgPlace('');
    }
    if(x_isEmpty(phone)){
      setMsgPhone('手機 是必填的欄位');
      
      error_Count ++;
    } else {
      setMsgPhone('');
    }
    // 驗證是否有空白
    if (error_Count > 0 ){
      // 代表  TODO 1 有錯誤，不必檢查下去
      return false;
    }
    // 檢查email
    if(x_isEmail(email)){
      setMsgEmail('');
    } else {
      setMsgEmail('Email 無效');
      error_Count ++;
      // return false;
    }
    // 密碼八位數
    if(x_isPassword(password)){
      setMsgPass('');
    } else {
      setMsgPass('密碼無效，至少8位英數字');
      error_Count ++;
      // return false;
    }
    // 密碼確認錯誤
    if(password === conPassword){
      setMsgConPass('');
    } else {
      setMsgConPass('密碼確認錯誤');
      error_Count ++;
      // return false;
    }
    // 手機確認
    if(x_isMobile(phone)){
      setMsgPhone('');
    } else {
      setMsgPhone('手機無效，必須符合台灣規格');
      error_Count ++;
      // return false;
    }
    console.log(error_Count,'error_Count')
    // 驗證資料是否符合規定
    if(error_Count > 0){
      return false;
    } else {
      let my_Data = {
        email:email,
        password:password,
        username:username,
        birthdate:birth,
        country:place,
        mobile:phone
      }
      console.table(my_Data)
      alert("填寫完成...謝謝");
    }

  }
  return (
    <div className="App">
      <div className="container">
        <h1>validate.js React範例</h1>
        <form id="mainForm">
          <div className="form-row">
            <div className="form-group col-12">
              <label htmlFor="email">Email</label>
              <input id="email" className="form-control" type="text" placeholder="Email" name="email" value={email} onChange={(e) => {setEmail(e.target.value)}} />
              <div id="email_message" className="messages">
                {msgEmail}
              </div>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
                <label htmlFor="password">密碼</label>
                  <input id="password" className="form-control" type="password" placeholder="Password" name="password" value={password} onChange={(e) => {setPassword(e.target.value)}} />
                <div id="password_message" className="messages">
                  {msgPass}
                </div>
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="confirm_password">確認密碼</label>
              <input id="confirm_password" className="form-control" type="password" placeholder="Confirm password" name="confirm_password" value={conPassword} onChange={(e) => {setConPassword(e.target.value)}} />
              <div id="confirm_password_message" className="messages">
                {msgConPass}
              </div>
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="username">使用者名稱</label>
              <input id="username" className="form-control" type="text" placeholder="Username" name="username" value={username} onChange={(e) => {setUsername(e.target.value)}} />
              <div id="username_message" className="messages">
                {msgUser}
              </div>
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="birthdate">生日</label>
              <input id="birthdate" className="form-control" type="date" placeholder="YYYY-MM-DD" name="birthdate" value={birth} onChange={(e) => {setBirth(e.target.value)}} />
              <div id="birthdate_message" className="messages">
                {msgBirth}
              </div>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="country">所在地</label>
                <select id="country" className="form-control" name="country" value={place} onChange={(e) => {setPlace(e.target.value)}}>
                  <option value="0">(選取場所)</option>
                  <option value="KS">高雄</option>
                  <option value="TC">台南</option>
                  <option value="TP">台北</option>
                </select>
                <div id="country_message" className="messages">
                  {msgPlace}
                </div>
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="mobile">手機</label>
              <input id="mobile" className="form-control" type="tel" placeholder="09**123456手機格式" name="mobile" value={phone} onChange={(e) => {setPhone(e.target.value)}} />
              <div id="mobile_message" className="messages">
                {msgPhone}
              </div>
            </div>
          </div>
          <button className="btn btn-primary" onClick={submit}>註冊</button>
        </form>
      </div>
    </div>
  );
}

export default App;
