first_value = int(input('inset here the first value: '))
second_value = int(input('insert here the second value: '))
third_value = int(input('insert here the third value: '))
if third_value < second_value < first_value:
    print('the value {} is bigger than {} and also {}'.format(first_value, second_value, third_value))
elif third_value < second_value > first_value:
    print('the value {} is bigger than {} and also {}'.format(second_value, first_value, third_value))
else:
    print('the value {} is bigger than {} and also {}'.format(third_value, second_value, first_value))
