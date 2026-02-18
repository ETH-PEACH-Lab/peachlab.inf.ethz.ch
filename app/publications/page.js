"use client"

import { useState } from "react";
import pubs from "@/data/pubs.json";
import { Collapse, Grid, Checkbox, Input } from "@geist-ui/core";
import PubCard from "./PubCard";
import "./style.css";

export default function Publications() {
    const [paperOnly, setPaperOnly] = useState(true);
    const [search, setSearch] = useState("");

    const categorizeByYear = (publications) => {
        return publications.reduce((acc, pub) => {
            if (!acc[pub.year]) {
                acc[pub.year] = [];
            }
            acc[pub.year].push(pub);
            return acc;
        }, {});
    };

    // apply filter based on checkbox state; when paperOnly is true we
    // drop any publication where `is_poster` is false or missing
    let filteredPubs = paperOnly
        ? pubs.filter((pub) => !pub.is_poster)
        : pubs;
    // further restrict by search query on title (case-insensitive)
    if (search.trim()) {
        const q = search.toLowerCase();
        filteredPubs = filteredPubs.filter((pub) =>
            pub.title.toLowerCase().includes(q)
        );
    }

    const categorizedPubs = categorizeByYear(filteredPubs);

    return (
        <div>
            <div className="publications-header-row">
                <h2>Publications</h2>
                <div className="publications-header-controls">
                    <Checkbox
                        checked={paperOnly}
                        onChange={(e) => setPaperOnly(e.target.checked)}
                    >
                        Paper Only
                    </Checkbox>
                    <Input
                        placeholder="Search publications"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
            </div>
            </div>
            {Object.keys(categorizedPubs).length === 0 ? (
                <div style={{marginTop: '1rem', fontStyle: 'italic', minHeight: '200px', textAlign: 'center', width: '800px'}}>
                    No publications found.
                </div>
            ) : (
                Object.keys(categorizedPubs)
                    .sort((a, b) => b - a) // Sort years in descending order
                    .map((year) => (
                        <div key={year}>
                            <Collapse.Group>
                                <Collapse title={year} initialVisible>
                                    <Grid.Container>
                                        {categorizedPubs[year].map((pub, index) => (
                                            <Grid xs={24} sm={24} key={index}>
                                                <PubCard pub={pub} />
                                            </Grid>
                                        ))}
                                    </Grid.Container>
                                </Collapse></Collapse.Group>
                        </div>
                    ))
            )}
        </div>
    );
}