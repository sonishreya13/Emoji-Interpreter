import "./App.css";
import { useState } from "react";
function Emoji() {
    const [emoji, setEmoji] = useState("")
    const emojiDictionary = {
        "😀": "Grinning Face",
        "🤣": "Rolling on the Floor Laughing",
        "🤑": "Money-Mouth Face",
        "😑": "Expressionless Face",
        "😕": "Confused Face",
        "😟": "Worried Face",
        "🤗": "Hugging Face",
        "😉": "Winking Face",
        "😋": "Face Savoring Food",
        "😇": "Smiling Face with Halo",
        "🤐": "Zipper-Mouth Face",
    };

    const showChange = (e) => {
        //    console.log(emojiDictionary[e.target.value]); 
        if (!emojiDictionary[(e.target.value)]) {
            setEmoji("Not available")
        }
        else {
            setEmoji(emojiDictionary[(e.target.value)])
        }
        if (e.target.value == "") {
            setEmoji("")
        }
    }
    return (
        <div>
            <header className="header">Emoji Interpreter</header>
            <h3 className="description">Type your emoji here 👇 to know its meaning</h3>
            <input className="input" type="text" onChange={showChange} /> <br />
            <h3 style={{ textAlign: "center", color: "blue" }}>{emoji}</h3>
            <h3 className="description">Click on the emoji to show its meaning</h3>
            <center>😀 🤣 🤑 😑 😕 😟 🤗 😉 😋 😇 🤐</center>
        </div>
    )
}
export default Emoji;