// given two sorted arrays, find their union and intersection

function printUnion (arr1, arr2, m, n) {
    var i = 0, j = 0;

    while(i<m &&  j<n) {
        if(arr1[i] < arr2[j]) {
            document.write(arr1[i++] + " ")
        } else if( arr2[j] < arr1[i]) {
            document.write(arr2[j++] + " ")
        } else {
            document.write(arr2[j++] + " ")
        }
    }

    while(i<m) {
        
    }
}