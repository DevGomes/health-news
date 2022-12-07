import { NewsService } from './services/news.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.css']
})
export class NewsPageComponent implements OnInit {

  public newsHealth: Array<any> = [];

  constructor(
    private newsService: NewsService) { }

  async ngOnInit(): Promise<void> {
    const { articles }  = await (await this.newsService.getHealtNews()).data;
    this.newsHealth = articles;
  }

}
