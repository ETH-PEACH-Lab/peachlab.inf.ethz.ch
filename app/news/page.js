"use client"
import news from "@/data/news.json"
import "./style.css"
import { Card } from   "@geist-ui/core";

export default function News() {
    return (
        <div className="news-container">
            <h2 className="news-title">News</h2>
            <ul className="news-list">
                {news.map((item, index) => (
                    <li key={index} className="news-item">
                        <Card>
                            <p className="news-time" style={{fontWeight: "bold"}}>{item.time}</p>
                            <p className="news-text" dangerouslySetInnerHTML={{ __html: item.title }} />
                        </Card>
                    </li>
                ))}
            </ul>
        </div>
    )
}
