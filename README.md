# Node.JS Examples

This repository is a collective of opinionated and real-world examples of how you can use Node.js to build things.

## How This Repository is Structured

This repository is structured in a specific way:

- **Top-level directories** are **category directories** of applications - for example `CLI`, `server`, and `utility` - that enable you to find the specific _kind_ of example you're looking for.
- **Second-level directories** are **project directories** named after specific modules, frameworks, platforms, or tools - for example, `commander` is a CLI framework, both `express` and `fastify` are web frameworks, and `moment` is a utility.
- **Third-level directories** are **example directories**, where specific examples live. You can find a full list of these examples in the [Examples](#examples) section below.

Here is an example of the structure in general terms:

```text
- examples (root)
  - category
    - project
      - example
  - category
    - project
      - example
      - example
      - example
    - project
      - example
      - example
```

Each **example** should have a few properties: 
- Usable example code.
- Passing tests.
- A README.md that explains what the example does and how to use it.
