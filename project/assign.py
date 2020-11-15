def assign_marker():
    marker=''
    while not (marker=='x' or marker=='o'):
       marker=input("enter the correct marker\t")

    if marker=='x':
        print ('x','o')
    else:
        print ('o','x')

assign_marker()