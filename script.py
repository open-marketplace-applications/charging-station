
import RPi.GPIO as GPIO
import time

RELAIS_1_GPIO = 17


GPIO.setmode(GPIO.BCM) # Broadcom pin-numbering scheme

GPIO.setup(RELAIS_1_GPIO, GPIO.OUT) # GPIO Modus zuweisen

# Initial state for LEDs:
print("Testing RF out, Press CTRL+C to exit")

try:
    print("set GIOP high")
    GPIO.output(RELAIS_1_GPIO, GPIO.HIGH) # an              
    time.sleep(5) 
except KeyboardInterrupt: # If CTRL+C is pressed, exit cleanly:
   print("Keyboard interrupt")

except:
   print("some error") 

finally:
   print("clean up") 
   GPIO.cleanup() # cleanup all GPIO 