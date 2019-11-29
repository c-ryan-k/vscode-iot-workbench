// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

import * as os from 'os';
import * as path from 'path';
import * as vscode from 'vscode';
import {VSCExpress} from 'vscode-express';

import {ArduinoPackageManager} from './ArduinoPackageManager';
import {BoardProvider} from './boardProvider';
import {ConfigHandler} from './configHandler';
import {EventNames, FileNames} from './constants';
import {TelemetryWorker} from './telemetry';

export interface DeviceInfo {
  vendorId: number;
  productId: number;
}

export class UsbDetector {
  private static _vscexpress: VSCExpress|undefined;
  // tslint:disable-next-line: no-any
  private static _usbDetector: any;

  constructor(
      private context: vscode.ExtensionContext,
      private channel: vscode.OutputChannel) {
    const disableUSBDetection =
        ConfigHandler.get<boolean>('disableAutoPopupLandingPage');
    if (os.platform() === 'linux' || disableUSBDetection) {
      return;
    } else {
      // Only load detector module when not in remote
      UsbDetector._usbDetector = require('../vendor/node-usb-native').detector;
    }
  }

  getBoardFromDeviceInfo(device: DeviceInfo) {
    if (device.vendorId && device.productId) {
      const boardFolderPath = this.context.asAbsolutePath(path.join(
          FileNames.resourcesFolderName, FileNames.templatesFolderName));
      const boardProvider = new BoardProvider(boardFolderPath);
      const board = boardProvider.find(
          {vendorId: device.vendorId, productId: device.productId});

      return board;
    }
    return undefined;
  }

  showLandingPage(device: DeviceInfo) {
    const board = this.getBoardFromDeviceInfo(device);

    if (board) {
      const telemetryWorker = new TelemetryWorker(this.context);
      const telemetryContext = telemetryWorker.createContext();

      telemetryWorker.callCommandWithTelemetry(
          this.context, telemetryContext, this.channel, EventNames.detectBoard,
          false, async () => {
            if (board.exampleUrl) {
              ArduinoPackageManager.installBoard(board);

              const exampleUrl = 'example.html?board=' + board.id +
                  '&url=' + encodeURIComponent(board.exampleUrl || '');
              UsbDetector._vscexpress = UsbDetector._vscexpress ||
                  new VSCExpress(this.context, 'views');
              UsbDetector._vscexpress.open(
                  exampleUrl,
                  board.examplePageName +
                      ' samples - Azure IoT Device Workbench',
                  vscode.ViewColumn.One, {
                    enableScripts: true,
                    enableCommandUris: true,
                    retainContextWhenHidden: true
                  });
            }
          }, {}, {board: board.name});
    }
  }

  async startListening() {
    const disableUSBDetection =
        ConfigHandler.get<boolean>('disableAutoPopupLandingPage');
    if (os.platform() === 'linux' || disableUSBDetection) {
      return;
    }

    if (!UsbDetector._usbDetector) {
      return;
    }

    const devices: DeviceInfo[]|undefined =
        await UsbDetector._usbDetector.find();

    if (devices) {
      const uniqueDevices: DeviceInfo[] = [];

      devices.forEach(device => {
        if (uniqueDevices.findIndex(
                item => item.vendorId === device.vendorId &&
                    item.productId === device.productId) < 0) {
          uniqueDevices.push(device);
        }
      });

      uniqueDevices.forEach(this.showLandingPage.bind(this));
    }

    UsbDetector._usbDetector.on('add', this.showLandingPage.bind(this));
  }
}