""" NumPy is module for Python.
 The name is an acronym for "Numeric Python" or "Numerical Python".
  It is pronounced /ˈnʌmpaɪ/ (NUM-py) or less often /ˈnʌmpi (NUM-pee)).
   It is an extension module for Python, mostly written in C.
    This makes sure that the precompiled mathematical and numerical functions and functionalities of Numpy guarantee great execution speed.
"""


# THIS IS AN UNSTRUCTURED TEST FILE
import numpy as np

# Index trick when working with two np-arrays
a = np.array([1, 2, 3, 6, 1, 4, 1])
b = np.array([5, 6, 7, 8, 3, 1, 2])

# Only saves a at index where b == 1
other_a = a[b == 1]
# Saves every spot in a except at index where b != 1
other_other_a = a[b != 1]

# BOOLEAN INDEXING
x = np.array([4, 6, 8, 1, 2, 6, 9])
y = x > 5
print(x[y])
# >>> [6 8 6 9]

# Even shorter
x = np.array([1, 2, 3, 4, 4, 35, 212, 5, 5, 6])
print(x[x < 5])
# >>> [1 2 3 4 4]

# how you actually copy array without messing with the previous one
new_arr = b.copy()

#multidimensional array in numpy called matrix  .(3x3) matrix
mymatrix = [[1,2,3] , [4,5,6] , [7,8,9]]

# generates 3 zeros in an array 
myzeros = np.zeros(3)

# generates 4 ones in an array 
myones = np.ones(4)

#creates an identity matrix uing numpy (4x4)

identitymatrix = np.eye(4)