package com.brenogomes.challenge.newsapi.controller;


import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.brenogomes.challenge.newsapi.dto.ArticleResult;

@RestController
public class NewsController {
	
	@Value("${api.news.key}")
	private String KEY;
	
	@CrossOrigin
	@RequestMapping("/health-test")
	public String hello() {
		return "Everything Alright";
	}
	
	@CrossOrigin
	@GetMapping(value = "/health-news")
	public ArticleResult getNews() {
		String url = "https://newsapi.org/v2/top-headlines?country=br&category=health&pageSize=50&apiKey="+ KEY;
		RestTemplate restTemplate = new RestTemplate();
		ArticleResult healthNewsResult = restTemplate.getForObject(url, ArticleResult.class);
		return healthNewsResult;
	}

}
