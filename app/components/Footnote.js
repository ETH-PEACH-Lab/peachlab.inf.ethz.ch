"use client"; // ✅ Mark as a Client Component

import { Text } from "@geist-ui/core";

export default function Footnote() {
    return (
    <footer style={{height: "50px", background: "#222", color: "#d6d6d6", textAlign: "center", padding: "20px"}}>
        {/* <div>
        <h4 style={{fontSize:"1.5rem"}}>Contact</h4>
        <p style={{fontWeight: "bold"}}>Prof. Dr. April Wang</p>
        <p>Assistant Professor at the Department of Computer Science</p>
        <Divider />
        <p>Professur Educational Technology</p>
        <p>Universitätstrasse 6</p>
        <p>8092 Zürich</p>
        <p>Switzerland</p>
        </div> */}
        <Text small style={{display: "block"}}>Programming, Education, and Computer-Human Interaction</Text>
        <Text small style={{display: "block"}}>© 2025 ETH Zürich</Text>
    </footer>
    )
}