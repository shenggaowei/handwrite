class EventBus {
    public events: any[]
    constructor() { this.events = [] }
    on = (eventName: string, callback: any) => {
        this.events.push({ eventName, callback })
    }

    emit = (eventName: string, payload: any) => {
        const eventInfo = this.events.filter(ele => ele.eventName === eventName);
        if (!eventInfo) { return }
        eventInfo.forEach(ele => {
            ele.callback(payload)
        })
    }
}

export default EventBus