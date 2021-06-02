const { formatMessageDates } = require("../utility/format-date");

test("create a new obj with the key/value pairs copied along with a newly formatted date property", () => {
    const fakeUserMessages = [
        {
            message_id: 1,
            username: "Bob",
            content: "This is a Jest test.",
            topic: "general",
            created_at: new Date()
        },
        {
            message_id: 2,
            username: "Suzy",
            content: "This is a Jest test.",
            topic: "general",
            created_at: new Date()
        }
    ];

    expect(formatMessageDates(fakeUserMessages)).toBe()
});