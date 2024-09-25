---
title: 코드 블럭
author: stella
date: "2024-06-22"
subtitle: 대통령의 임기가 만료되는 때에는 임기만료 70일 내지 40일전에 후임자를 선거한다. 헌법개정안은 국회가 의결한 후 30일 이내에 국민투표에 붙여 국회의원선거권자 과반수의 투표와 투표자 과반수의 찬성을 얻어야 한다.
tags: ["code", "blogging"]
---

Code Blocks
코드 블럭

    4 space indention
    makes full-width
    standard code blocks

```js
var now = new Date();

var days = new Array(
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
);

var months = new Array(
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
);

var date = (now.getDate() < 10 ? "0" : "") + now.getDate();

function fourdigits(number) {
  return number < 1000 ? number + 1900 : number;
}
today =
  days[now.getDay()] +
  ", " +
  months[now.getMonth()] +
  " " +
  date +
  ", " +
  fourdigits(now.getYear());

document.write(today);
```

```css
#sc_drag_area {
  height: 100px;
  left: 150px;
  position: absolute;
  top: 100px;
  width: 250px;
  z-index: 9999;
}
```
