"use client"
import ReactMarkdown from 'react-markdown';
// eslint-disable-next-line import/no-webpack-loader-syntax
import teachingMd from '!raw-loader!@/data/teaching.md';
import { Note, Card, Text, Link, Image, Tag, Collapse } from "@geist-ui/core";

export default function Teaching() {
  return (
    <div>
      <h2>Teaching</h2>
      <Note>We offer thesis projects to current bachelor and master students at ETH Zurich. Please check <a href="/theses">this page</a> for more details.
      </Note>
      <div style={{marginTop: "20px"}}>
      <ReactMarkdown
        components={{
          a: ({ node, ...props }) => (
            <a {...props} target="_blank" rel="noopener noreferrer">
              {props.children}
            </a>
          ),
        }}
      >{teachingMd}</ReactMarkdown></div>
    </div>
  );
}