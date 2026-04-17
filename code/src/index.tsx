import { createCliRenderer, RGBA, SyntaxStyle, TextAttributes } from "@opentui/core";
import { createRoot } from "@opentui/react";
import { useState } from "react";


function App() {
  const [value, setValue] = useState("")
  const [botres, setBotres] = useState("")

  const syntaxStyle = SyntaxStyle.fromStyles({
  keyword: { fg: RGBA.fromHex("#ff6b6b"), bold: true }, // red, bold
  string: { fg: RGBA.fromHex("#51cf66") }, // green
  comment: { fg: RGBA.fromHex("#868e96"), italic: true }, // gray, italic
  number: { fg: RGBA.fromHex("#ffd43b") }, // yellow
  default: { fg: RGBA.fromHex("#ffffff") }, // white
})


  const ai = async () => {
    try{
      console.log(process.env.GROQ_API_KEY)
      const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers:{
          "Content-Type": "application/json",
          "Authorization": `Bearer ${process.env.GROQ_API_KEY}`
        },
        body: JSON.stringify({
          messages: [{role: "user", content: value}],
          model: "meta-llama/llama-4-scout-17b-16e-instruct"
        })
      })

      const data = await res.json()
      console.log(data)

      const content = data.choices[0]?.message?.content || ""
      const codeMatch = content.match(/```(?:javascript|js)?\n([\s\S]*?)```/);
      const cleanedCode = codeMatch ? codeMatch[1] : content;
       setBotres("const hello = 'world'; console.log(hello);")

    }catch(err){
      if(err instanceof Error)
      setBotres(err.message)
    }
  }

  const codeExample = `function hello() {
  // This is a comment

  const message = "Hello, world!"
  const count = 42

  return message + " " + count
}`

  return (
    <box alignItems="center" justifyContent="center">
      <box justifyContent="center" alignItems="center">
        <ascii-font font="tiny" text="CODE" />
        <text attributes={TextAttributes.DIM}>What will you build?</text>
        <text fg={RGBA.fromHex("#FF0000")}>IF THIS IS NOT RED, YOUR TERMINAL DOES NOT SUPPORT HEX COLORS</text>
        <input placeholder="enter a text" value={value} onInput={setValue} onSubmit={ai} focused/>
        <text>{value}</text>
        <code content={codeExample} filetype="javascript" syntaxStyle={syntaxStyle} height={10} />
      </box>
    </box>
  );
}

const renderer = await createCliRenderer();
renderer.keyInput.on("keypress", (key) => {
  if(key.ctrl && key.name === "l"){
    renderer.console.toggle()
  }
})
createRoot(renderer).render(<App />);
renderer.start()