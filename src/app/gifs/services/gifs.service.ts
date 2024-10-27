import { Injectable } from "@angular/core";
const GIPHY_KEY = 'U4kz5GyESiiUwztMgBFXRZvI40MdBrnS';
@Injectable({ providedIn: 'root' })
export class GifsService {

    private _tagHistory: string[] = [];

    get tagHistory(): string[] {
        return [...this._tagHistory];
    }

    searchTag(tag: string): void {
        this.organizeHistory(tag);
    }

    organizeHistory(tag: string): void {
        tag = tag.toLowerCase();
        if (this._tagHistory.includes(tag)) {
            this._tagHistory = this._tagHistory.filter(where => where !== tag);
        }
        this._tagHistory.unshift(tag);
        this._tagHistory = this.tagHistory.splice(0, 10);
    }

}