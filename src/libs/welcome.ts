const inline_code = "`";
const code_block = "```";

export const welcome = `
> If you want your new notes to be empty uncheck 'add welcome content' from settings.

## Welcome to Obsidian 👋🏻

Obsidian is a simple **note-taking app** that uses **Markdown** syntax to format your notes.

You can create your first note by clicking on the top-left icon on the sidebar, or delete one by clicking on top right icon.

Following there's a quick overview of the currently supported Markdown syntax.

## Text formatting

This is a **bold** text.
This is an _italic_ text.

## Headings

Here are all the heading formats currently supported by **_NoteMark_**:

# Heading 1

## Heading 2

### Heading 3

#### Heading 4

### Bulleted list

For example, you can add a list of bullet points:

- Bullet point 1
- Bullet point 2
- Bullet point 3

### Numbered list

Here we have a numbered list:

1. Numbered list item 1
2. Numbered list item 2
3. Numbered list item 3

### Blockquote

> This is a blockquote. You can use it to emphasize some text or to cite someone.

### Code blocks

Only \`inline code\` is currently supported!

Code block snippets using the following syntax _\`\`\`js\`\`\`_ are **_not supported_** yet!

### Links

Links are **_not supported_** yet!

# Supported shortcuts

- Use one to six # characters to create a heading. The number of # characters determines the heading level.
- Use * or - to create a list item.
- Use > to create a block quote.
- Select a text and press Ctrl+B to make it bold, Ctrl+I to make it italic, or Ctrl+U to underline it. Use Cmd on macOS.
- With text selected, use Cmd+K to open the link dialog.
- Use ${inline_code} to create inline code.
- Type ${code_block}$lang (with $lang being any supported language, followed by space) to insert a code block.
`;
