export function merge(
  collection_1: number[], 
  collection_2: number[], 
  collection_3: number[]
): number[] {
  const result: number[] = [];
  
  let i1 = 0;
  let i2 = 0;
  let i3 = collection_3.length - 1;
  
  while (i1 < collection_1.length || i2 < collection_2.length || i3 >= 0) {
    
    const val1 = i1 < collection_1.length ? collection_1[i1] : Infinity;
    const val2 = i2 < collection_2.length ? collection_2[i2] : Infinity;
    const val3 = i3 >= 0 ? collection_3[i3] : Infinity;
    
    if (val1 <= val2 && val1 <= val3) {
      result.push(val1);
      i1++;
    } 
    else if (val2 <= val3) {  
      result.push(val2);
      i2++;
    } 
    else {
      result.push(val3);
      i3--;
    }
  }
  
  return result;
}