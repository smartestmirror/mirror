#!/usr/bin/env python
import skywriter
import signal



@skywriter.flick()
def flick(start,finish):
  print('Got a flick!', start, finish)


@skywriter.double_tap()
def doubletap(position):
  print('Double tap!', position)

@skywriter.tap()
def tap(position):
  print('Tap!', position)

signal.pause()
