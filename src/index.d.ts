declare module "time" {
  export default class Time {
    /**
   * start and end timestamps for today
   *
   * @returns {array} [startTime, endTime]
   */
    static today(): number[]

    /**
     * yesterday's start and end timestamps
     *
     * @returns {array} [startTime, endTime]
     */
    static yesterday(): number[]

    /**
     * the start and end timestamps for tomorrow
     *
     * @returns {array} [startTime, endTime]
     */
    static tomorrow(): number[]

    /**
     * the start and end timestamps of the week\
     *
     * @returns {array} [startTime, endTime]
     */
    static week(): number[]

    /**
     * last week's start and end timestamps
     *
     * @returns {array} [startTime, endTime]
     */
    static lastWeek(): number[]

    /**
     * start and end timestamps for next week
     *
     * @returns {array} [startTime, endTime]
     */
    static nextWeek(): number[]
    /**
     * the start and end timestamps of the month
     *
     * @returns {array} [startTime, endTime]
     */

    static month(): number[]

    /**
     * last month's start and end timestamps
     *
     * @returns {array} [startTime, endTime]
     */
    static lastMonth(): number[]

    /**
     * the start and end timestamps for the next month
     *
     * @returns {array} [startTime, endTime]
     */
    static nextMonth(): number[]

    /**
     * start and end timestamps for this year
     *
     * @returns {array} [startTime, endTime]
     */
    static year(): number[]

    /**
     * last year's start and end timestamps
     *
     * @returns {array} [startTime, endTime]
     */
    static lastYear(): number[]

    /**
     * start and end timestamps for next year
     *
     * @returns {array} [startTime, endTime]
     */
    static nextYear(): number[]

    /**
     * days to seconds
     * 
     * @param {number} day days
     */
    static daysToSeconds(day: number): number

    /**
     * days to milliseconds
     * 
     * @param {number} day days
     */
    static daysToMilliseconds(day: number): number

    /**
     * weeks to seconds
     * @param {number} week weeks
     */
    static weeksToSeconds(week: number): number

    /**
     * weeks to milliseconds
     * @param {number} week weeks
     */
    static weeksToMilliseconds(week: number): number

    /**
     * the time stamp (milliseconds) of a few days ago
     * 
     * @param {number} day days
     */
    static daysAgo(day: number): number

    /**
     * the time stamp (milliseconds) of a few days after
     * 
     * @param {number} day days
     */
    static daysAfter(day: number): number
  }
}