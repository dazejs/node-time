module.exports = function (yy, mm, dd, h, m, s, l) {
  const date = new Date()
  date.setFullYear(yy)
  date.setMonth(mm)
  date.setDate(dd)
  date.setHours(h)
  date.setMinutes(m)
  date.setSeconds(s)
  date.setMilliseconds(l)
  return date.getTime()
}