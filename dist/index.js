"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const merge_1 = require("./merge");
describe('merge function', () => {
    test('should merge three empty arrays', () => {
        // Arrange
        const col1 = [];
        const col2 = [];
        const col3 = [];
        // Act
        const result = (0, merge_1.merge)(col1, col2, col3);
        // Assert
        expect(result).toEqual([]);
    });
});
`` `

### **Step 4: Algorithm Approach (Without .sort())**

Think of it like a race with 3 lanes:
- Lane 1: [1, 3, 5] ← pointer starts at index 0
- Lane 2: [2, 4, 6] ← pointer starts at index 0  
- Lane 3: [9, 7, 5] ← pointer starts at END (index 2) because it's reversed!

**Pick the smallest value from the current positions, add to result, move that pointer.**

Pseudocode:
` ``;
1.;
Create;
three;
pointers(i1 = 0, i2 = 0, i3 = lastIndex);
2.;
While;
there;
are;
still;
elements;
to;
process: -Compare;
current;
elements;
from;
each;
array
    - Pick;
the;
smallest
    - Add;
to;
result
    - Move;
that;
array;
's pointer;
3.;
Return;
result;
//# sourceMappingURL=index.js.map