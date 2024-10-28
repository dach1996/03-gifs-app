import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Gif, SearchResponse } from "../interfaces/gifs.interfaces";

@Injectable({ providedIn: 'root' })
export class GifsService {

    private GIPHY_KEY: string = 'U4kz5GyESiiUwztMgBFXRZvI40MdBrnS';
    private BASE_URL: string = 'https://api.giphy.com/v1/gifs/search';
    constructor(private httpClient: HttpClient) {

    }

    public gifList: Gif[] = [];

    private _tagHistory: string[] = [];

    get tagHistory(): string[] {
        return [...this._tagHistory];
    }

    searchTag(tag: string): void {

        this.organizeHistory(tag);

        var params: HttpParams = new HttpParams().
            set('q', tag)
            .set('limit', '10')
            .set('api_key', this.GIPHY_KEY);


        this.httpClient.get<SearchResponse>(this.BASE_URL, { params })
            .subscribe(
                res => {
                    this.gifList = res.data;
                    console.log({ data: res.data });
                }
            )
    }

    saveLocalStorage(): void {
        localStorage.setItem("history", JSON.stringify(this.tagHistory));
    }

    organizeHistory(tag: string): void {
        tag = tag.toLowerCase();
        if (this._tagHistory.includes(tag)) {
            this._tagHistory = this._tagHistory.filter(where => where !== tag);
        }
        this._tagHistory.unshift(tag);
        this._tagHistory = this.tagHistory.splice(0, 10);
        this.saveLocalStorage();
    }

}