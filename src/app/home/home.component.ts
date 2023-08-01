import { Component, ViewChild, ElementRef, AfterViewInit  } from '@angular/core';
import * as QRCode from 'qrcode';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  {
  @ViewChild('qrCode', { static: false }) qrCode!: ElementRef;


  url:string = '';
  generateQRCode(text: string): void {
    QRCode.toCanvas(this.qrCode.nativeElement, text, (error) => {
      if (error) {
        console.error('Error generating QR code:', error);
      }
    });
  }


  generate(): void {
    this.generateQRCode(this.url); // Replace this URL with your desired content
  }
}



