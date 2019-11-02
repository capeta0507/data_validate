import React,{useState} from 'react';
import './App.css';

const App = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [conPassword, setConPassword] = useState('')
  const [username, setUsername] = useState('')
  const [place, setPlace] = useState('')
  const [phone, setPhone] = useState('')
  const [birth, setBirth] = useState('')

  const submit = (e) => {
    e.preventDefault()
    console.log('送出')
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
              <div id="email_message" className="messages"></div>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
                <label htmlFor="password">密碼</label>
                  <input id="password" className="form-control" type="password" placeholder="Password" name="password" value={password} onChange={(e) => {setPassword(e.target.value)}} />
                <div id="password_message" className="messages"></div>
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="confirm_password">確認密碼</label>
              <input id="confirm_password" className="form-control" type="password" placeholder="Confirm password" name="confirm_password" value={conPassword} onChange={(e) => {setConPassword(e.target.value)}} />
              <div id="confirm_password_message" className="messages"></div>
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="username">使用者名稱</label>
              <input id="username" className="form-control" type="text" placeholder="Username" name="username" value={username} onChange={(e) => {setUsername(e.target.value)}} />
              <div id="username_message" className="messages"></div>
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="birthdate">生日</label>
              <input id="birthdate" className="form-control" type="date" placeholder="YYYY-MM-DD" name="birthdate" value={birth} onChange={(e) => {setBirth(e.target.value)}} />
              <div id="birthdate_message" className="messages"></div>
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
                <div id="country_message" className="messages"></div>
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="mobile">手機</label>
              <input id="mobile" className="form-control" type="tel" placeholder="09**123456手機格式" name="mobile" value={phone} onChange={(e) => {setPhone(e.target.value)}} />
              <div id="mobile_message" className="messages"></div>
            </div>
          </div>
          <button className="btn btn-primary" onClick={submit}>註冊</button>
        </form>
      </div>
    </div>
  );
}

export default App;
