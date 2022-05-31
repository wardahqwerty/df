N = 1
def on_button_pressed_a():
global N
basic.show_number(N)
N += 1
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
global N
N -= 1
basic.show_number(N - 1)


input.on_button_pressed(Button.B, on_button_pressed_b)

def on_button_pressed_ab():
global N

for i in range(3):
    basic.show_number(N ** 2)
N = N + 1

input.on_button_pressed(Button.AB, on_button_pressed_ab)