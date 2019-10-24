# Form input 資料驗證(form/regex)
###### tags: `form` `Regex`

前端的工作除了製作介面、呼叫API等工作之外，在這中間還有一項重要工作就是【資料驗證 Validation】。
也就是說介面的輸入資料，在傳送給API之前，需要確保資料是有效、乾淨的資訊。

前端工作上會用到的 UI 可以在 Form 裡設定 Regular Expression 做為資料檢查的最前線。

### Regular Expression
Regex : Regular Expression，這是定義資料格式檢查的正規表示法。

[參考說明](https://larry850806.github.io/2016/06/23/regex/)
[Youtube教學](https://www.youtube.com/watch?v=rPNGB0ZLvdw)
[指令整理](https://docs.google.com/document/d/1bUq0Jb1mLM7zmcVjDyLIX6UTLWGbKp-d99-w4rMrjvg/edit)

在javascript中的指令如下：(要檢測 myStr 變數是否符合 'yyyy-mm-dd'日期輸入格式)
1. 定義1：var reg = new RegExp('[0-9]{4}-[0-9]{2}-[0-9]{2}');
2. 定義2：var reg = /^\d{4}-\d{2}-\d{2}$/;
3. 方法1：reg.test(myStr);
4. 方法2：myStr.match(reg);

```javascript=
var reg = new RegExp('[0-9]{4}-[0-9]{2}-[0-9]{2}');
var myStr = '2019-10-06';

if(reg.test(myStr)){
    // doSomething 方法1
}

if(myStr.match(reg)){
    // doSomething 方法2
}
```
### Regex 格式範例

```bash
1. 西元生日格式 "2019-10-06"：/^\d{4}-\d{2}-\d{2}$/ 或者 /[0-9]{4}-[0-9]{2}-[0-9]{2}/
2. 身分證字號 "A123456789"：/^[A-Z][12]\d{8}$/
3. 台灣手機號碼 "0952001588"：/^09\d{8}$/
4. 台灣手機號碼2 "0952001588"：/^09[0-9]{8}$/
5. Email驗證 "davidtpe@seed.net.tw"：/^\w+((-\w+)|(.\w+))@[A-Za-z0-9]+((.|-)[A-Za-z0-9]+).[A-Za-z]+$/
6. 公司統編 "80503102"：/\d{8}/
7. 密碼 "至少8位英數的密碼限制"：/[a-zA-Z0-9]{8,}/
```

### 驗證網頁測試
[Regex101](https://regex101.com/)

### html input pattern 屬性方法
1. input 裡加入 pattern 屬性
2. style CSS 裡加入 invalid 屬性
3. submit 當 pattern驗證錯誤時，顯示錯誤欄位與訊息
```htmlmixed=
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>資料驗證</title>
    <style>
      #myID {
        color:blue;
        font-size: 25px;
      }
      /* 輸入驗證錯誤時的表現 */
      #myID:invalid{
        color:red;
        border-color: red;
      }
      #mySend {
        font-size: 25px;
      }
    </style>
  </head>
  <body>
    <form>
      <h1>表單資料驗證</h1>
      身分證字號：<input type="text" id="myID" autocomplete="off" pattern='^[A-Z][12]\d{8}$' required>
      <input type="submit" id="mySend" value="送出">
    </form>
  </body>
</html>
```
驗證錯誤 & submit 訊息：
![](https://i.imgur.com/Kt9qCfZ.png)

資料正確：
![](https://i.imgur.com/6ktHb7Q.png)


如果要自訂錯誤訊息：加入 title 屬性
參考：[HTML5 Form Validation With the “pattern” Attribute](https://webdesign.tutsplus.com/tutorials/html5-form-validation-with-the-pattern-attribute--cms-25145)

```htmlmixed=
身分證字號：<input type="text" id="myID" autocomplete="off" pattern='^[A-Z][12]\d{8}$' title="(不符合台灣身分證字號規則)" required>
```
![](https://i.imgur.com/q0D1ncL.png)


### 備註：

[線上測試工具](https://regex101.com/tests)
Email驗證規則：[Email Regex](https://ithelp.ithome.com.tw/articles/10094951)
javascript密碼驗證：https://www.itread01.com/p/1426911.html
複雜密碼要求：[驗證密碼複雜度](https://blog.miniasp.com/post/2010/03/07/JavaScript-Regular-Expression-Positive-Lookahead-Trap)
[HTML: HTML5 Form Validation Examples](https://www.the-art-of-web.com/html/html5-form-validation/)
[JavaScript: Password Validation using regular expressions and HTML5](https://www.the-art-of-web.com/javascript/validate-password/)
[JavaScript 表單驗證](https://docs.google.com/document/d/1mSxRmAUx-rm0wJ9MtkISwTemZmilFguXhMLavy-zxkg/edit#)

