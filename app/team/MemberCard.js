"use client"
import { Grid, Card, Text, Link, Image, Tag } from "@geist-ui/core";

export default function MemberCard({ member }) {
    return <Grid xs={24} md={12}>
        <Card width="100%" className="member-container">
            <div className="member-content">
                <Image
                    width={"120px"}
                    height={"120px"}
                    src={member.avatar}
                    className="member-image"
                />
                <div className="member-info">
                    {member.link ?
                        <Link target="_blank" href={member.link}>
                            <Text h4 my={0} className="member-link">{member.name}</Text>
                        </Link>
                        : <Text h4 my={0}>{member.name}</Text>
                    }
                    <Text type="secondary" small>{member.title}</Text>
                    <Text type="secondary" small>{member.affiliation}</Text>
                    {member.topics && <Tag type="lite">{member.topics}</Tag>}
                </div>
            </div>
        </Card>
    </Grid>
}