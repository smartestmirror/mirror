# Smart Mirror
Welcome to our project for the smart mirror! With the help of third party modules, and some of our own code and ideas, we made a mirror that does a bunch of things like Face Recognition, Gesture Control, Voice Control, and specific Alexa voice commands that call information on SEPTA.

## Getting Started
Follow these instructions to get your smart mirror all set up, we will talk about the hardware needed, and anything else that you would have to download.

### Hardware Prerequisites

The hardware that you will need to create your magic mirror will be...
  - Desktop
  - Mouse
  - Keyboard
  - Raspberry Pi 3b+
  - Usb Webcam (Has built in microphone)
  - Gesture Sensor

### Setting Up Rasbian Stretch

The first thing to do when you have your Raspberry Pi 3b+ is to set up Raspbian Stretch on it. Here is a link to the official Raspberry Pi website that explains best how to download Raspbian Stretch. You'll also see on the website three different versions of Raspbian Stretch that you can download, download the version called "Raspbian Stretch with Desktop".

https://www.raspberrypi.org/downloads/raspbian/

### Raspberry Pi Configuration

If this is a brand new Raspberry Pi that you are using, you might have to mess with some of the configuration settings that are preset when you download your Raspbian Stretch operating system. Boot up your Raspberry Pi and when the OS loads, you'll see on your desktop to what appears to be a normal operating system. In the top left you will a little rasberry icon, click on that and a drop down menu will appear. In the drop-down menu click on Preferences, then click on Raspberry Pi Configuration. A menu should pop up, and inside of that menu you will see a tab called Interfaces, click on that. Inside of Interfaces you want to make sure Camera and SSH are enabled. Then back to the tabs at the top of the menu click on Localisation, fill in the information for Locale, Timezone, Keyboard, and WiFi Country.
  
Also make sure that your Raspberry Pi is connected to WiFi. Look at the top right of your screen to see icons that represent the sound and WiFi connectivity. You can connect wirelessly to a network you want to use, and if you are using a speaker, you can make sure the sound will come out through that speaker by clicking on the relevant icon in the top right, and click the name of your speaker.

Next clone over our repo to your Raspbery Pi. Open up the terminal and type in this command.

```
git clone https://github.com/smartestmirror/mirror.git
```
## OpenCV

For some of the modules that are being used, OpenCV is necessary. To download OpenCV, follow these commands that you should type into your terminal.

### Configure the Raspberry Pi
Type in these commands...
```shell=
sudo apt-get update
sudo apt-get upgrade
sudo rpi-update
sudo reboot
sudo apt-get install build-essential git cmake pkg-config
sudo apt-get install libjpeg-dev libtiff5-dev libjasper-dev libpng12-dev
sudo apt-get install libavcodec-dev libavformat-dev libswscale-dev libv4l-dev
sudo apt-get install libxvidcore-dev libx264-dev
sudo apt-get install libgtk2.0-dev
sudo apt-get install libatlas-base-dev gfortran
cd ~
git clone https://github.com/Itseez/opencv.git
cd opencv
git checkout 3.3.0
cd ~
git clone https://github.com/Itseez/opencv_contrib.git
cd opencv_contrib
git checkout 3.3.0
```
### Build OpenCV
Warning! Building OpenCV can take upwards to 3 hours.
First get pip cross version :
```shell=
wget https://bootstrap.pypa.io/get-pip.py
```
Two Python alternatives to build OpenCV : v2.7 or v3.0
> If using **Python v2.7** :
```shell=
sudo apt-get install python2.7-dev
sudo python get-pip.py
```
> If using **Python v3.0** :
```shell=
sudo apt-get install python3-dev
sudo python3 get-pip.py
```
Since OpenCV takes so long to build, we want to change the swapsize which will allow the Raspberry Pi to properly use all four CPU cores.
In the terminal navigate to `/etc/dphys-swapfile`, and edit that file with nano to change the variable `CONF_SWAPSIZE`:
```shell=
# CONF_SWAPSIZE=100
CONF_SWAPSIZE=1024
```
Swap service has to be restarted since we changed the `CONF_SWAPSIZE` variable.
```shell=
sudo /etc/init.d/dphys-swapfile stop
sudo /etc/init.d/dphys-swapfile start
```

Now we can build OpenCV, you will see down below a command called `make -j4`, this will start the build using all 4 cores of the CPU, if you want, you can change that to `make -j3` instead because we've had issues with running all 4 cores at 100% for a couple of hours, this might make the build take a little longer but it doesn't hurt to do.
```shell=
pip install numpy
cd ~/opencv
mkdir build
cd build
cmake -D CMAKE_BUILD_TYPE=RELEASE \
    -D CMAKE_INSTALL_PREFIX=/usr/local \
    -D INSTALL_C_EXAMPLES=OFF \
    -D INSTALL_PYTHON_EXAMPLES=ON \
    -D OPENCV_EXTRA_MODULES_PATH=~/opencv_contrib/modules \
    -D BUILD_EXAMPLES=ON ..
make -j4
sudo make install
sudo ldconfig
```

## Installing Alexa

Here is a link that amazon specifically provides for installing Alexa on a raspberry pi. This is just the basic Alexa though without any of the unique commands that we have for SEPTA.

https://developer.amazon.com/docs/alexa-voice-service/set-up-raspberry-pi.html
