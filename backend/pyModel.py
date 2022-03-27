import cv2
import time
import matplotlib.pyplot as plt
import sys
plate_cascade =cv2.CascadeClassifier('license_plate.xml') # Loads the data required for detecting the license plates from cascade classifier.
# add the path to 'license_plate.xml' file.
def display(img_):
    img = cv2.cvtColor(img_, cv2.COLOR_BGR2RGB)
    fig = plt.figure(figsize=(10,6))
    ax = plt.subplot(111)
    ax.imshow(img)
def detect_plate(img): # the function detects and perfors blurring on the number plate.
    plate_img = img.copy()
    roi = img.copy()
    plate_rect = plate_cascade.detectMultiScale(plate_img, scaleFactor = 1.3, minNeighbors = 7) # detects numberplates and returns the coordinates and dimensions of detected license plate's contours.
    for (x,y,w,h) in plate_rect:
        
        roi_ = roi[y:y+h, x:x+w, :] # extracting the Region of Interest of license plate for blurring.
        blurred_roi = cv2.blur(roi_, ksize=(16,16)) # performing blur operation on the ROI
        plate_img[y:y+h, x:x+w, :] = blurred_roi # replacing the original license plate with the blurred one.

        cv2.rectangle(plate_img, (x,y), (x+w, y+h), (51,51,255), 3) # finally representing the detected contours by drawing rectangles around the edges.
        
    return plate_img # returning the processed image.

cam = cv2.VideoCapture(sys.argv[1]) # reading the video file.

while cam.isOpened():
    ret, frame = cam.read() # reading the file frame by frame.
    if ret == True:
#         time.sleep(1/20) # change the sleep time to increase the fps of output video.
        fr = detect_plate(frame) # sends each frame to the function for processing.
        cv2.imshow('video', fr) # displaying the output image.
        if(cv2.waitKey(1) & 0xFF == 27): # press 'Esc' key to exit anytime.
            break
    else:
        break
img = cv2.imread('car_plate.jpg')
display(img)
output_img = detect_plate(img)
cam.release()
cv2.destroyAllWindows()