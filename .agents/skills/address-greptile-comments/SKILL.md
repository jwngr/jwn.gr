---
name: address-greptile-comments
description: Fetch unaddressed Greptile review comments for the current PR, summarize them for approval, then apply the fixes. Use when the user says "address greptile comments", "fix greptile review", or "fix review comments".
---

# Address Greptile Comments

Fetches unresolved Greptile review comments for a PR, summarizes the proposed fixes for approval, then applies them.

## Workflow

### Step 1: Identify the PR

If the user provides a PR URL or number, use that. Otherwise ask.

### Step 2: Fetch Unaddressed Greptile Comments

Use the `mcp__greptile__list_merge_request_comments` tool with:

- `greptileGenerated: true`
- `addressed: false`
- `name`: repo full name (e.g. `conductornow/conductor`)
- `remote`: `github`
- `defaultBranch`: `main`
- `prNumber`: the PR number

### Step 3: Summarize and Wait for Approval

Present a summary of all comments **before making any changes**. Format it as:

---

**Greptile Review — N comment(s)**

**1. `path/to/file.ts` — Short title**

> One sentence describing the issue.

Proposed fix: What will be changed and why.

**2. `path/to/file.ts` — Short title**

> ...

---

If any comment looks incorrect, risky, or unclear, flag it explicitly and recommend skipping it.

Then ask: "Proceed with all fixes?" (or list which ones to skip if flagged).

**Do not edit any files until the user confirms.**

### Step 4: Apply Fixes

Once confirmed, apply each fix:

- Read the file first to understand context
- Make the minimal change needed to address the comment
- Use the suggested code from ```suggestion blocks when present
- Don't refactor or clean up surrounding code

Run formatting and linting after all fixes are applied to confirm no errors.

## Notes

- Always read the file before editing — understand context before applying a fix
- If a comment is ambiguous or the suggested change looks wrong, flag it rather than blindly applying it
- Greptile suggestions use ```suggestion blocks — extract the code from those when present
