"use client"

import { useState } from "react";
import pubs from "@/data/pubs.json";
import PubCard from "./PubCard";
import { ChevronDown, ChevronUp } from "lucide-react";
import "./style.css";

export default function Publications() {
    const [expandedYears, setExpandedYears] = useState(() => {
        // Initially expand all years
        const years = [...new Set(pubs.map(p => p.year))];
        return Object.fromEntries(years.map(y => [y, true]));
    });

    const categorizeByYear = (publications) => {
        return publications.reduce((acc, pub) => {
            if (!acc[pub.year]) {
                acc[pub.year] = [];
            }
            acc[pub.year].push(pub);
            return acc;
        }, {});
    };
    
    const categorizedPubs = categorizeByYear(pubs);
    const years = Object.keys(categorizedPubs).sort((a, b) => b - a);

    const toggleYear = (year) => {
        setExpandedYears(prev => ({
            ...prev,
            [year]: !prev[year]
        }));
    };

    return (
        <div className="publications-container">
            {/* <h1 className="publications-title">Publications</h1> */}
            
            <div className="publications-content">
                {years.map((year) => (
                    <div key={year} className="publications-year-section">
                        <button 
                            className="publications-year-header"
                            onClick={() => toggleYear(year)}
                            aria-expanded={expandedYears[year]}
                        >
                            <h2 className="publications-year-title">{year}</h2>
                            <span className="publications-year-toggle">
                                {expandedYears[year] ? 
                                    <ChevronUp size={20} strokeWidth={2} /> : 
                                    <ChevronDown size={20} strokeWidth={2} />
                                }
                            </span>
                        </button>
                        
                        {expandedYears[year] && (
                            <div className="publications-year-list">
                                {categorizedPubs[year].map((pub, index) => (
                                    <PubCard pub={pub} key={index} />
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}