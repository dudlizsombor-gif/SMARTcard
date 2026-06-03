#1. üdvözlő szöveg
#2.legyen választható/ember
#2.1 felasználó bekerese
#3.tábla létrehozása:
        #3x3 táblázat
        #üres mező
 #4. szimbólum kiválasztása (AZ X KEZD MINDIG)
#5. tábla megjelenítése
#5.1 nyertes játékos kiírása
#6. ujrainditás/bezárás

#print("Welcome to tick tack toe!")
from typing import Callable


def print_welcome ():
    print("Welcome to tick tack toe!")

print_welcome()

board = [
    ["_","_","_"],
    ["_","_","_"],
    ["_","_","_"]
]

def print_board ():
    print("board:")
    for row in board:
        for e in row:
            print(e, end=" ")
        print()

print_board()

def get_player_names():
    print("player1 please enter your username:")
    player1 = input()
    print("player2 please enter your username:")
    player2 = input()
    return player1,player2

def decide_who_starts(player1, player2):
    print(player1, "is X")
    print(player2,"is o")
    print(player1 ," starts")

player1, player2 = get_player_names()
decide_who_starts(player1, player2)

#board[0][0] = "X"

#print_board

print("player1 ,please enter the row and column you want to place your X")

mov1 = input()
mov2 = input()