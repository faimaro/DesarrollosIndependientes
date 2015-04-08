#ifndef MAINWINDOW_H
#define MAINWINDOW_H

#include <QMainWindow>
#include <QByteArray>
#include<QGridLayout>
#include "clienteurl.h"
namespace Ui {
class MainWindow;
}

class MainWindow : public QMainWindow
{
    Q_OBJECT
    ClienteUrl *client;
    QImage *imagenInternet;
    QGridLayout *layout;

public:
    explicit MainWindow(QWidget *parent = 0);
    ~MainWindow();

private slots:
    void slot_on_pushButton_clicked();
    void slot_cargarImg(QByteArray);

private:
    Ui::MainWindow *ui;
};

#endif // MAINWINDOW_H
