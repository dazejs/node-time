# 使用时间戳获取方法
用于获取各种类型时间戳

# 使用
## 安装
  ```bash
npm install --save @dazejs/time
  ```
## 引入

```js
const Time = require('@dazejs/time')
```

# 方法

## 今天开始和结束的时间戳
  ```js
// 返回一个数组['开始时间戳','结束时间戳']
const [startTime, endTime] = Time.today()
  ```
## 昨日开始和结束的时间戳
  ```js
// 返回一个数组['开始时间戳','结束时间戳']
const [startTime, endTime] = Time.yesterday()
  ```
## 明天开始和结束的时间戳
  ```js
// 返回一个数组['开始时间戳','结束时间戳']
const [startTime, endTime] = Time.tomorrow()
  ```
## 本周开始和结束的时间戳
  ```js
// 返回一个数组['开始时间戳','结束时间戳']
const [startTime, endTime] = Time.week()
  ```
## 上周开始和结束的时间戳
  ```js
// 返回一个数组['开始时间戳','结束时间戳']
const [startTime, endTime] = Time.lastWeek()
  ```
## 下周开始和结束的时间戳
  ```js
// 返回一个数组['开始时间戳','结束时间戳']
const [startTime, endTime] = Time.nextWeek()
  ```
## 本月开始和结束的时间戳
  ```js
// 返回一个数组['开始时间戳','结束时间戳']
const [startTime, endTime] = Time.month()
  ```
## 上个月开始和结束的时间戳
  ```js
// 返回一个数组['开始时间戳','结束时间戳']
const [startTime, endTime] = Time.lastMonth()
  ```
## 下个月开始和结束的时间戳
  ```js
// 返回一个数组['开始时间戳','结束时间戳']
const [startTime, endTime] = Time.nextMonth()
  ```
## 今年开始和结束的时间戳
  ```js
// 返回一个数组['开始时间戳','结束时间戳']
const [startTime, endTime] = Time.year()
  ```
## 去年开始和结束的时间戳
  ```js
// 返回一个数组['开始时间戳','结束时间戳']
const [startTime, endTime] = Time.lastYear()
  ```
## 明年开始和结束的时间戳
  ```js
// 返回一个数组['开始时间戳','结束时间戳']
const [startTime, endTime] = Time.nextYear()
  ```
## N天前的时间戳
  ```js
// 返回一个时间戳
const days = 10; // 本例定义为10天
const time = Time.daysAgo(days); // 返回10天前的时间戳
  ```
## N天后的时间戳
  ```js
// 返回一个时间戳
const days = 10; // 本例定义为10天
const time = Time.daysAfter(days); // 返回10天后的时间戳
  ```
## 天数转换成秒数
  ```js
// 返回一个数字
const days = 10; // 本例定义为10天
const seconds = Time.daysToSeconds(days); // 返回10天共多少秒
  ```
## 天数转换成毫秒数

```js
// 返回一个数字
const days = 10; // 本例定义为10天
const seconds = Time.daysToMilliseconds(days); // 返回10天共多少毫秒
```

## 周数转换成秒数

  ```js
// 返回一个数字
const weeks = 2; // 本例定义为2周
const seconds = Time.weeksToSeconds(weeks); // 返回2周共多少秒
  ```

### 周数转换成毫秒数

```js
// 返回一个数字
const weeks = 2; // 本例定义为2周
const seconds = Time.weeksToMilliseconds(weeks); // 返回2周共多少毫秒
```

