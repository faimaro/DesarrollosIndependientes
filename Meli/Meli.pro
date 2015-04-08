#-------------------------------------------------
#
# Project created by QtCreator 2015-04-03T19:58:46
#
#-------------------------------------------------

QT       += core gui
QT += opengl widgets network

greaterThan(QT_MAJOR_VERSION, 4): QT += widgets

TARGET = Meli
TEMPLATE = app
INCLUDEPATH += "/usr/include/GL/"
LIBS += "/usr/lib/x86_64-linux-gnu/libglut.so"

LIBS += "/usr/lib/x86_64-linux-gnu/libopencv_core.so"
LIBS += "/usr/lib/x86_64-linux-gnu/libopencv_highgui.so"
LIBS += "/usr/lib/x86_64-linux-gnu/libopencv_imgproc.so"
LIBS += "/usr/lib/x86_64-linux-gnu/libopencv_objdetect.so"


SOURCES += main.cpp\
        mainwindow.cpp \
    clienteurl.cpp

HEADERS  += mainwindow.h \
    clienteurl.h

FORMS    += mainwindow.ui
