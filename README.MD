# Form input 資料驗證(form/regex)
###### tags: `form` `資料驗證`

前端的工作除了製作介面、呼叫API等工作之外，在這中間還有一項重要工作就是【資料驗證 Validation】，也就是說介面的輸入資料，在傳送給API之前，需要確保資料是有效、乾淨的，而非垃圾資訊，避免GIGO (Garbage in, garbage out)。
[GIGO](http://blog.udn.com/FuChen/20616916)
[GIGO wiki](https://zh.wikipedia.org/wiki/%E5%9E%83%E5%9C%BE%E8%BF%9B%EF%BC%8C%E5%9E%83%E5%9C%BE%E5%87%BA)

首先我們要定義資料的格式：(最常用的)
1. 文字 (Text)
2. 數字 (Number)
3. 日期 (Date/Time)
4. 是/非 (True/False)

另外還有介面型態：(UI)
1. 選擇 (Select)
2. 勾選 (Check)
3. 選項 (Option)

資料驗證的方法非常多。
