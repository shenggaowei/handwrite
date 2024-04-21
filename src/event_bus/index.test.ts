import EventBus from ".";

describe("EventBus", () => {
    test("should be able to register an event", () => {
        const eventBus = new EventBus();
        eventBus.on("test", () => { });
        expect(eventBus.events.length).toBe(1);
    });

    test("should be able to emit an event", () => {
        const callback = jest.fn()
        const eventBus = new EventBus()
        eventBus.on("test", callback)
        eventBus.emit("test", 2)
        expect(callback).toHaveBeenCalledWith(2);
    });
});