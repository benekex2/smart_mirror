import os #for OS program calls
import sys #For Clean sys.exit command
import time #for sleep/pause 
import RPi.GPIO as io #read the GPIO pins

io.setmode(io.BCM)

pir_pin = 17 # Sensor pin 25 for data out of the PIR sensor 

io.setup(pir_pin, io.IN)
print("Motion Activated (PIR) Screen Saver")
print("less than 30 seconds to leave the sensor area...")
time.sleep(2)
os.system("xscreensaver-command -activate") #OS command for Xscreensaver program = Activate, turns on screensaver instantly

while True:  # endless loop, waiting for nothing. Use Control+C to exit
	if io.input(pir_pin): # Waits for motion signal from PIR on GPIO pin 25, then com[plete rest and exit
		os.system("xscreensaver-command -deactivate") ##OS command for Xscreensaver program = Activate, turns on screensaver instantly
		print("PIR Screen Saver Deactivated")
		io.cleanup() #reset GPIO
		sys.exit() #exit cleanly to the command prompt.
	

