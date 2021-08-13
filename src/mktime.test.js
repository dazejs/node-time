const mktime = require("./mktime")
// @ponicode
describe("mktime", () => {
    test("0", () => {
        let callFunction = () => {
            mktime("Mon Aug 03 12:45:00", "Mon Aug 03 12:45:00", "01:04:03", "p", -100, "p", "This is a String1")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            mktime("01:04:03", "2017-09-29T23:01:00.000Z", "01:04:03", "\"#'{7855663]}ééàà", -5.48, "p", "p")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            mktime("Mon Aug 03 12:45:00", "01:04:03", "Mon Aug 03 12:45:00", 123456789, -100, "\"#'{7855663]}ééàà", "foo bar")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            mktime("01:04:03", "2017-09-29T19:01:00.000", "2017-09-29T19:01:00.000", "foo bar", -5.48, "p", "foo bar")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            mktime("Mon Aug 03 12:45:00", "2017-09-29T23:01:00.000Z", "2017-09-29T19:01:00.000", 123456789, -5.48, "foo bar", "foo bar")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            mktime(undefined, undefined, "", undefined, undefined, undefined, "")
        }
    
        expect(callFunction).not.toThrow()
    })
})
