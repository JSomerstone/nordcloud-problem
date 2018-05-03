# nordcloud-problem

## Problem solving
- Create a function that solves the most suitable (with most power) link station for a device at given point [x,y]. 
Use JavaScript runnable in modern browser or Node.js.

This problem can be solved in 2-dimensional space. Link stations have reach and power.

*A link station’s power can be calculated:*
power = (reach - device's distance from link station)^2 if distance > reach, power = 0

Function receives list of link stations and the point where the device is located.
Function should output following line:
“Best link station for point x,y is x,y with power z”
Or:
“No link station within reach for point x,y”

Link stations are located at points (x, y) and have reach (r) ([x, y, r]): 
```
[[0, 0, 10],
[20, 20, 5],
[10, 0, 12]]
```
Print out function output from points (x, y): 
`(0,0), (100, 100), (15,10) and (18, 18)`.
