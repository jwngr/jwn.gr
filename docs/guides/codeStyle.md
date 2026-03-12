# Code Style

Keep code obvious and easy to maintain. Prefer small, direct changes that match
existing patterns in nearby files.

## TypeScript

- Use explicit types for public functions, props, and exported values.
- Prefer narrowing with simple checks over complex type gymnastics.
- Avoid `any` unless there is no reasonable alternative and document why.

## Imports and Files

- Follow the import style already used in the file or directory.
- Keep module boundaries clear and avoid circular dependencies.
- Name files and exports consistently with existing conventions.

## Error Handling

- Prefer early returns and guard clauses.
- Do not swallow errors; log or surface them intentionally.
- Keep errors actionable and specific.

## Comments

- Comment intent or tricky logic, not the obvious.
- Keep comments short and up to date.

## Formatting

- Use `npm run format` for formatting.
- Do not hand-edit generated output in `dist/`.
