# ⚠️ Supabase Directory - NOT IN USE

## Status: INACTIVE

This directory contains Supabase edge functions that are **NOT being used** by this application.

## Why is this here?

These files are protected system files from Figma Make and cannot be deleted. However, they are not imported or used anywhere in the application code.

## Backend

This application uses **Firebase Firestore** exclusively. All data operations go through:
- `/utils/firebase/firestore.ts` - Firestore operations
- `/utils/api.ts` - API wrapper (Firebase only)

## Edge Functions Status

The edge functions in `/functions/server/` are:
- ❌ **Not deployed**
- ❌ **Not called**
- ❌ **Not configured**
- ✅ **Can be safely ignored**

## Deployment

If you see deployment errors related to Supabase, you can safely ignore them. The application does not depend on these functions.

## Configuration

The `config.toml` file in this directory has deployment disabled to prevent automatic deployment attempts.

---

**Last Updated:** October 21, 2025  
**Backend:** Firebase Firestore Only
