const { formatMessageDates } = require("../utility/format-date");

test("create a new array of two objects with the key/value pairs copied along with newly formatted date properties", () => {
    const fakeDate = new Date(Date.UTC(2020, 11, 20, 3, 23, 16, 738));
    const fakeUserMessages = [
        {
            message_id: 1,
            username: "Bob",
            content: "This is a Jest test.",
            topic: "general",
            created_at: fakeDate
        },
        {
            message_id: 2,
            username: "Suzy",
            content: "This is a Jest test.",
            topic: "general",
            created_at: fakeDate
        }
    ];

    const expectedResult = [
        {
            message_id: 1,
            username: "Bob",
            content: "This is a Jest test.",
            topic: "general",
            created_at: "Saturday, December 19, 2020 at 9:23 PM"
        },
        {
            message_id: 2,
            username: "Suzy",
            content: "This is a Jest test.",
            topic: "general",
            created_at: "Saturday, December 19, 2020 at 9:23 PM"
        }
    ];

    expect(formatMessageDates(fakeUserMessages)).toEqual(expectedResult);
});

test("create a new array of one object with the key/value pairs copied along with a newly formatted date property", () => {
    const fakeDate = new Date(Date.UTC(2021, 5, 1, 15, 23, 16, 738));
    const fakeUserMessages = [
        {
            message_id: 1,
            username: "Ross",
            content: "This is a Jest test.",
            topic: "fashion",
            created_at: fakeDate
        }
    ];

    const expectedResult = [
        {
            message_id: 1,
            username: "Ross",
            content: "This is a Jest test.",
            topic: "fashion",
            created_at: "Tuesday, June 1, 2021 at 10:23 AM"
        }
    ];

    expect(formatMessageDates(fakeUserMessages)).toEqual(expectedResult);
});