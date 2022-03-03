# Load purchases from Cache

> ## Success case
1. System executes "Load Purchases" command
2. System loads data from Cache
3. System validates if the Cache is less than 3 days old
4. System creates a shopping list from Cache data
5. System returns the shopping list

> ## Exception - Cache expired
1. System clears cache
2. System returns error

> ## Exception - Cache empty
1. System returns error