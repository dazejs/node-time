/**
 * Copyright (c) 2018 Chan Zewail
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
const mktime = require('./mktime')

class Time {
  /**
   * start and end timestamps for today
   *
   * @returns {array} [startTime, endTime]
   */
  static today() {
    const date = new Date()
    const [y, m, d] = [date.getFullYear(), date.getMonth(), date.getDate()]
    return [
      mktime(y, m, d, 0, 0, 0, 0),
      mktime(y, m, d, 23, 59, 59, 999)
    ]
  }

  /**
   * yesterday's start and end timestamps
   *
   * @returns {array} [startTime, endTime]
   */
  static yesterday() {
    const date = new Date()
    const [y, m, d] = [date.getFullYear(), date.getMonth(), date.getDate() - 1]
    return [
      mktime(y, m, d, 0, 0, 0, 0),
      mktime(y, m, d, 23, 59, 59, 999)
    ]
  }

  /**
   * the start and end timestamps for tomorrow
   *
   * @returns {array} [startTime, endTime]
   */
  static tomorrow() {
    const date = new Date()
    const [y, m, d] = [date.getFullYear(), date.getMonth(), date.getDate() + 1]
    return [
      mktime(y, m, d, 0, 0, 0, 0),
      mktime(y, m, d, 23, 59, 59, 999)
    ]
  }

  /**
   * the start and end timestamps of the week\
   *
   * @returns {array} [startTime, endTime]
   */
  static week() {
    const date = new Date()
    const [y, m, d] = [date.getFullYear(), date.getMonth(), date.getDate() - date.getDay() + 1]
    return [
      mktime(y, m, d, 0, 0, 0, 0),
      mktime(y, m, d + 6, 23, 59, 59, 999)
    ]
  }

  /**
   * last week's start and end timestamps
   *
   * @returns {array} [startTime, endTime]
   */
  static lastWeek() {
    const date = new Date()
    const [y, m, d] = [date.getFullYear(), date.getMonth(), date.getDate() - date.getDay() - 6]
    return [
      mktime(y, m, d, 0, 0, 0, 0),
      mktime(y, m, d + 6, 23, 59, 59, 999)
    ]
  }

  /**
   * start and end timestamps for next week
   *
   * @returns {array} [startTime, endTime]
   */
  static nextWeek() {
    const date = new Date()
    const [y, m, d] = [date.getFullYear(), date.getMonth(), date.getDate() - date.getDay() + 8]
    return [
      mktime(y, m, d, 0, 0, 0, 0),
      mktime(y, m, d + 6, 23, 59, 59, 999)
    ]
  }
  /**
   * the start and end timestamps of the month
   *
   * @returns {array} [startTime, endTime]
   */
  static month() {
    const date = new Date()
    const [y, m] = [date.getFullYear(), date.getMonth()]
    return [
      mktime(y, m, 1, 0, 0, 0, 0),
      mktime(y, m + 1, 0, 23, 59, 59, 999)
    ]
  }

  /**
   * last month's start and end timestamps
   *
   * @returns {array} [startTime, endTime]
   */
  static lastMonth() {
    const date = new Date()
    const [y, m] = [date.getFullYear(), date.getMonth() - 1]
    return [
      mktime(y, m, 1, 0, 0, 0, 0),
      mktime(y, m + 1, 0, 23, 59, 59, 999)
    ]
  }

  /**
   * the start and end timestamps for the next month
   *
   * @returns {array} [startTime, endTime]
   */
  static nextMonth() {
    const date = new Date()
    const [y, m] = [date.getFullYear(), date.getMonth() + 1]
    return [
      mktime(y, m, 1, 0, 0, 0, 0),
      mktime(y, m + 1, 0, 23, 59, 59, 999)
    ]
  }

  /**
   * start and end timestamps for this year
   *
   * @returns {array} [startTime, endTime]
   */
  static year() {
    const date = new Date()
    const [y] = [date.getFullYear()]
    return [
      mktime(y, 0, 1, 0, 0, 0, 0),
      mktime(y + 1, 0, 0, 23, 59, 59, 999)
    ]
  }

  /**
   * last year's start and end timestamps
   *
   * @returns {array} [startTime, endTime]
   */
  static lastYear() {
    const date = new Date()
    const [y] = [date.getFullYear() - 1]
    return [
      mktime(y, 0, 1, 0, 0, 0, 0),
      mktime(y + 1, 0, 0, 23, 59, 59, 999)
    ]
  }

  /**
   * start and end timestamps for next year
   *
   * @returns {array} [startTime, endTime]
   */
  static nextYear() {
    const date = new Date()
    const [y] = [date.getFullYear() + 1]
    return [
      mktime(y, 0, 1, 0, 0, 0, 0),
      mktime(y + 1, 0, 0, 23, 59, 59, 999)
    ]
  }

  /**
   * days to seconds
   * 
   * @param {number} day days
   */
  static daysToSeconds(day = 1) {
    return day * 86400
  }

  /**
   * days to milliseconds
   * 
   * @param {number} day days
   */
  static daysToMilliseconds(day = 1) {
    return day * 86400 * 1000
  }

  /**
   * weeks to seconds
   * @param {number} week weeks
   */
  static weeksToSeconds(week = 1) {
    return this.daysToSeconds(1) * 7 * week
  }

  /**
   * weeks to milliseconds
   * @param {number} week weeks
   */
  static weeksToMilliseconds(week = 1) {
    return this.daysToMilliseconds(1) * 7 * week
  }

  /**
   * the time stamp (milliseconds) of a few days ago
   * 
   * @param {number} day days
   */
  static daysAgo(day = 0) {
    const time = Date.now()
    return time - this.daysToMilliseconds(day)
  }

  /**
   * the time stamp (milliseconds) of a few days after
   * 
   * @param {number} day days
   */
  static daysAfter(day = 0) {
    const time = Date.now()
    return time + this.daysToMilliseconds(day)
  }
}

module.exports = Time