#include "mainwindow.h"
#include "ui_mainwindow.h"

MainWindow::MainWindow(QWidget *parent) :
    QMainWindow(parent),
    ui(new Ui::MainWindow)
{

    ui->setupUi(this);
    client->descargar("http://4.bp.blogspot.com/-SZPt5l2te4s/VEusJjlrkYI/AAAAAAAAAPI/LlZgiHzVg8o/s1600/music.png");

    //connect((ui->pushButton),SIGNAL(clicked()),client,SLOT(descargar()));
     //connect(ui->pushButton,SIGNAL(clicked()),SLOT(slot_on_pushButton_clicked()));


     connect(client, SIGNAL(descargaFinalizada(QByteArray)), SLOT(slot_cargarImg(QByteArray)));

}

MainWindow::~MainWindow()
{
    delete ui;
}

void MainWindow::slot_on_pushButton_clicked()
{
    qDebug()<<"ok";
    client->descargar("http://4.bp.blogspot.com/-SZPt5l2te4s/VEusJjlrkYI/AAAAAAAAAPI/LlZgiHzVg8o/s1600/music.png");


}



void MainWindow::slot_cargarImg(QByteArray data)
{

    QImage imagenInternet = QImage::fromData(data);
    //layout->addWidget(imagenInternet);
    ui->frame->setFrameRect(imagenInternet.rect());
}
