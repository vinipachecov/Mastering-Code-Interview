# Mastering-Code-Interview
This is the follow on code to the course Master the Coding Interview: Data Structures + Algorithms in Udemy by Andrei Neagoie.


## Data Structures

### Arrays
Well arrays are a common data structure in code interviews. However, they have their pros and cons. Let's list them:

Good:
* Fast Lookups
* Fast push/pop
* Ordered

Bad: 
* Slow inserts
* Slow deletes
* Fixed sizes (if you use static array)


## Hashes

Hashes are great data structure for fast access data. It's great to save specific data that are not objects, i.e, key value pairs. Also this structure doesn't help with sorting data for example.


|  Hashes | Arrays |
|---------|--------|
| search O(n) |  search O(1)|
| lookup O(1) |  lookup O(1)|
| push O(1) |  push O(1)|
| insert O(n) |  insert O(1)|
| delete O(n) |  delete O(1)|


Pros and cons
| Pros | Cons |
|------| -----|
|Fast Lookups| Unordered|
|Fast inserts| Slow key iteration|
|Flexible keys| -----|