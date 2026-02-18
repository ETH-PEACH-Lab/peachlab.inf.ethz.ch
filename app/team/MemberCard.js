"use client";

import { Grid, Card, Text, Link, Image, Tag } from "@geist-ui/core";

export default function MemberCard({ member }) {
    const { name, avatar, link, title, affiliation, topics } = member;

    return (
        <Grid xs={24} md={12}>
            <Card width="100%" className="member-container">
                <div className="member-content">
                    <Image
                        width="120px"
                        height="120px"
                        src={avatar}
                        className="member-image"
                        alt={name}
                    />
                    <div className="member-info">
                        {link ? (
                            <Link target="_blank" href={link}>
                                <Text h4 my={0}>{name}</Text>
                            </Link>
                        ) : (
                            <Text h4 my={0}>{name}</Text>
                        )}
                        <Text type="secondary" small>
                            {title}
                        </Text>
                        <Text type="secondary" small>
                            {affiliation}
                        </Text>
                        {topics && <Tag type="lite">{topics}</Tag>}
                    </div>
                </div>
            </Card>
        </Grid>
    );
}