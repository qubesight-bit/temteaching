# Architecture rules

- Use the authenticated request helper for protected AI Tutor streaming calls; public API keys identify the app, not the signed-in user.
- Conversation startup accepts an empty message history so the server can generate the first greeting while retaining authentication and input validation.