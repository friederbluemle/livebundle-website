---
id: plugin-authoring
title: Plugin Authoring
sidebar_label: Plugin Authoring
---

```typescript
public static readonly schema: Record<string, unknown> = configSchema;
```

```typescript
public static readonly envVarToConfigKey: Record<string, string> = {
  LB_STORAGE_AZURE_ACCOUNTURL: "accountUrl",
  LB_STORAGE_AZURE_CONTAINER: "container",
  LB_STORAGE_AZURE_SASTOKEN: "sasToken",
  LB_STORAGE_AZURE_SASTOKENDOWNLOAD: "sasTokenReads",
};
