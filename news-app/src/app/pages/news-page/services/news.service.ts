import { IResultHttp } from './../models/interfaces/IResultHttp';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(
    private httpClient: HttpClient) {
  }

  public getHealtNews(): Promise<IResultHttp> {
    return new Promise(async (resolve) => {
      try {
        const response = await this.httpClient.get(`${environment.url_api}/health-news`).toPromise();
        resolve({ success: true, data: response, error: undefined });
      } catch (error) {
        console.error('Ocorreu um erro ao obter as noticias');
        resolve({ success: false, data: undefined, error });
      }
    });
  }
}
