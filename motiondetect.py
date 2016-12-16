import os #for OS program calls
import sys #For Clean sys.exit command
import time #for sleep/pause 
import RPi.GPIO as io #read the GPIO pins

io.setmode(io.BCM)
pir_pin = 17
screen_saver = False

io.setup(pir_pin, io.IN)

while True:  
	if screen_saver:
		if io.input(pir_pin): 
			os.system("xscreensaver-command -deactivate")
			screen_saver = False
	else:
		time.sleep(2)
		os.system("xscreensaver-command -activate")
		screen_saver = True 

