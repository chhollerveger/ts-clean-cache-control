# BDD Specs

## Narrative

```
As an offline customer
I want the system to show me the last registered purchases
So I can see my expenses even without internet
```

### Scenario 1

```
Given the client has no internet connection
  And there is some data written in the cache
  And the cache data is newer than 3 days
When the customer asks to load their purchases
  Then the system should display your purchases coming from the cache
```
### Scenario 2

```
Given the client has no internet connection
  And there is some data written in the cache
  And the cache data is older than or equal to 3 days
When the customer asks to load their purchases
  Then the system should display an error message
```

### Scenario 3

```
Given the client has no internet connection
  And the cache is empty
When the customer asks to load their purchases
  Then the system should display an error messag
```