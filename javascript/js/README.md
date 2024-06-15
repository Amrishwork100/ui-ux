[]-> Array predefined list of methods :-

push-> one args to update the existing array.

pop-> it will always delete a last element or object of an array.

splice -> it is used for both insert and delete elements or objects from anywhere in the  array.
{
for delete- splice(startIndex,noOfElementDelete)
    example- spilce(1,2). it will extactly remove two element from an array, starting from index 1(including 1) to 2.
for insert- sploice(startInex, noOfElementDelete, insertValue)
    example- spilce(1, 0, "value"). it will extactly insert one elemeent or object after index 1.
for replace-
    example- splice(2,1,"value"), it will override the existing value with new value at index 2.
}
concat
every
some
filter
find
findIndex
forEach
includes
indexOf
map
flatMap
flat
reverse
slice
sort
