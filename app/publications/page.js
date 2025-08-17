"use client"

import pubs from "@/data/pubs.json";
import { Checkbox, Collapse, Card, Grid, Text, Button, Tooltip } from "@geist-ui/core";
import PubCard from "./PubCard";

export default function Publications() {
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

    return (
        <div>
            <h2 style={{borderBottom: 'none'}}>Publications</h2>
            {Object.keys(categorizedPubs)
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
            }
        </div>
    );
}