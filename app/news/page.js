"use client"
import news from "@/data/news.json"
import "./style.css"

export default function News() {
    return (
        <div className="news-page-container">
            <h1 className="news-page-title">News</h1>
            
            <div className="news-page-content">
                <ul className="news-page-list">
                    {news.map((item, index) => (
                        <li key={index} className="news-page-item">
                            <span className="news-page-date">{item.time}</span>
                            <div className="news-page-text" dangerouslySetInnerHTML={{ __html: item.title }} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
