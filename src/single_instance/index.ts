export class Bird {
    static instance: Bird | null = null;
    constructor() {
        if (!Bird.instance) {
            Bird.instance = this;
        }
        return Bird.instance;
    }
}

