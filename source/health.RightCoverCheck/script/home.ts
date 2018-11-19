import * as ko from "knockout";

export class HomeViewModel{
    reason: string
    index: number
    constructor(reson: string, index: number){
        this.index = index;
        this.reason = reson;
    }
}
