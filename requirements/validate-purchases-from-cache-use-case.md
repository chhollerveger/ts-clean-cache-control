# Validate purchases from Cache

> ## Success case
1. System executes "Validate Purchases" command
2. System loads data from Cache
3. System validates if the Cache is less than 3 days old

> ## Exception - Error loading data from cache
1. System clears cache

> ## Exception - Cache expired
1. System clears cache