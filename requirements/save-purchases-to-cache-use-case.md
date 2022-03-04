# Save purchases to cache

> ## Success case
1. System executes "Save Purchases" command
2. System creates a date to be stored in the Cache
3. System clears current Cache data
4. System saves new data in Cache
5. System does not return error

> ## Exception - Error clearing cache data
1. System does not write new Cache data
2. System returns error

> ## Exception - Error saving cache data
1. System returns error