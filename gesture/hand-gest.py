#!/usr/bin/env python
import skywriter
import signal
from pynput.keyboard import Key, Controller
import time


keyboard = Controller()

some_value = 5000

@skywriter.flick()
def flick(start,finish):
  if start == "east":
    keyboard.press(Key.left)
    keyboard.release(Key.left)
  if start == "west":
    keyboard.press(Key.right)
    keyboard.release(Key.right)
  if start == "north":
    keyboard.press(Key.down)
    keyboard.release(Key.down)
  if start == "south":
    keyboard.press(Key.up)
    keyboard.release(Key.up)


@skywriter.touch()
def touch(position):
  keyboard.press(Key.enter)
  keyboard.release(Key.enter)
  print('Touch!', position)

@skywriter.double_tap()
def doubletap(position):
  keyboard.press(Key.menu)
  keyboard.release(Key.menu)
  print('Double tap!', position)



signal.pause()
