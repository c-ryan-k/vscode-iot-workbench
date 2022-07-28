# Azure IoT Device Workbench for Visual Studio Code

[![Gitter](https://img.shields.io/badge/chat-on%20gitter-blue.svg)](https://gitter.im/Microsoft/vscode-iot-workbench)
[![Build Status](https://dev.azure.com/mseng/VSIoT/_apis/build/status/vscode-iot-workbench-github?branchName=master)](https://dev.azure.com/mseng/VSIoT/_build/latest?definitionId=9768&branchName=master)

## **End of Life / Support Notice**
This extension will no longer be supported after November 2022.
The repository has been archived and is read-only. Currently installed extensions will not be affected, but no new versions will be made available in the marketplace.
Furthermore, after November 2022 users will no longer be able to install the extension from the marketplace.

You may still be able to download and install previous extension releases from the [releases page](https://github.com/microsoft/vscode-iot-workbench/releases) of this repository.

## Overview

The **Azure IoT Device Workbench** is a Visual Studio Code extension that provides an integrated environment to code, build, deploy, and debug your IoT device project with multiple Azure services supported.

If you would like to develop device using [**IoT Plug and Play <sup>preview refresh</sup>**](https://docs.microsoft.com/azure/iot-pnp/) and the [Digital Twin Definition Language (DTDL)](https://aka.ms/DTDL), you could refer to the [DTDL extension](https://marketplace.visualstudio.com/items?itemName=vsciot-vscode.vscode-dtdl) to get intellisense completion and syntax validation of DTDL.

## Get Started

### Develop on generic device

Currently the following device platforms and languages are supported in Azure IoT Device Workbench.

#### Embedded Linux <sup>public preview</sup>

For Embedded Linux devices, the Device Workbench uses container to simplify the cross-compiling tool chain setup and configuration, which means all cross-compiling work happens in the container.

Languages supported: `C/C++`

Devices supported: [Cortex-A series](https://developer.arm.com/ip-products/processors/cortex-a) devices (e.g. Raspberry Pi, NXP i.MX6) that are running embedded Linux such as Debian, Ubuntu or Yocto Linux.

Follow the [setup guide](docs/embedded-linux/embedded-linux-setup.md) to setup the prerequisite including Docker runtime.

Here are a set of tutorials to help you get started:

- [Get Started connect Raspberry Pi to Azure IoT Hub](docs/embedded-linux/embedded-linux-get-started.md)
- [Configure an existing CMake project using containerized toolchain](docs/embedded-linux/embedded-linux-configure-project.md)
- [Develop IoT Plug and Play device using containerized toolchain](docs/embedded-linux/embedded-linux-pnp.md)
- [Customize your device toolchain](docs/embedded-linux/embedded-linux-customization.md)


#### Arduino

Currently, Device Workbench supports MXChip IoT DevKit and ESP32 DevKits using Arduino. For generic Arduino device, we recommend you use [Arduino extension in VS Code](https://marketplace.visualstudio.com/items?itemName=vsciot-vscode.vscode-arduino).

Languages supported: `Arduino C/C++`

Devices supported: [MXChip IoT DevKit](https://aka.ms/iot-devkit), [ESP32](https://www.espressif.com/en/products/hardware/esp-wroom-32/overview).

> The Device Workbench relies on Arduino IDE as a dependency to develop on the above devices. If you have installed Device Workbench prior to Arduino IDE, you may need to restart VS Code to make it find the Arduino IDE installation path correctly.

##### MXChip IoT DevKit

Follow the [setup guide](https://docs.microsoft.com/azure/iot-hub/iot-hub-arduino-iot-devkit-az3166-get-started#prepare-the-development-environment) to setup the environment including the Arduino extension.

Here are a set of tutorials to help you get started:

- [Get Started connect DevKit to Azure IoT Hub](https://docs.microsoft.com/azure/iot-hub/iot-hub-arduino-iot-devkit-az3166-get-started)
- [Use Azure IoT Hub Device Provisioning Service auto-provisioning device with IoT Hub](https://docs.microsoft.com/azure/iot-dps/how-to-connect-mxchip-iot-devkit)
- [Connect to the Remote Monitoring solution accelerator](https://docs.microsoft.com/azure/iot-accelerators/iot-accelerators-arduino-iot-devkit-az3166-devkit-remote-monitoring-v2)
- [Translate voice message with Azure Cognitive Services](https://docs.microsoft.com/en-us/samples/azure-samples/mxchip-iot-devkit-translator/sample/)
- [Send messages to an MQTT server using Eclipse Paho APIs](https://docs.microsoft.com/en-us/samples/azure-samples/mxchip-iot-devkit-mqtt-client/sample/)
- [DevKit State](https://docs.microsoft.com/en-us/samples/azure-samples/mxchip-iot-devkit-state/sample/)
- [DevKit OTA](https://docs.microsoft.com/en-us/samples/azure-samples/mxchip-iot-devkit-firmware-ota/sample/)

##### ESP32

Follow the [setup guide](docs/esp32/esp32-setup.md) to setup ESP32 device including the Arduino extension.

Here are a set of tutorials to help you get started:

- [Get Started connect ESP32 device to Azure IoT Hub](https://docs.microsoft.com/en-us/samples/azure-samples/esp32-iot-devkit-get-started/sample/)
- [ESP32 State](https://docs.microsoft.com/en-us/samples/azure-samples/esp32-iot-devkit-state/sample/)

Please take the [survey](https://www.surveymonkey.com/r/C7NY7KJ) to let us know extra device platforms and languages you want to see support in Device Workbench.


### Develop device using IoT Plug and Play
***This section is deprecated for Azure IoT Device Workbench 0.16.0 or above.***

If you are using Azure IoT Device Workbench extention before **0.16.0**, this extension provides an integrated environment to author IoT **Plug and Play <sup>public preview</sup>** *device capability models (DCM)* and *interfaces*, publish to model repositories, and generate skeleton C code to implement the device application.

Learn how to get started with IoT Plug and Play <sup>public preview</sup> and use the Device Workbench extension to build an IoT Plug and Play device:
- [What is IoT Plug and Play](https://docs.microsoft.com/azure/iot-pnp/overview-iot-plug-and-play) and the [Digital Twin Definition Language (DTDL)](https://aka.ms/DTDL) that enables it.
- [Quickstart: Use a device capability model to create an IoT Plug and Play device](https://docs.microsoft.com/azure/iot-pnp/quickstart-create-pnp-device)
- [Build an IoT Plug and Play Preview device that's ready for certification](https://docs.microsoft.com/azure/iot-pnp/tutorial-build-device-certification)
- [Use Azure IoT Device Workbench extension in Visual Studio Code](https://docs.microsoft.com/azure/iot-pnp/howto-develop-with-vs-vscode)
- [Connect an MXChip IoT DevKit device to your Azure IoT Central application via IoT Plug and Play](https://docs.microsoft.com/azure/iot-central/howto-connect-devkit-pnp)

## Commands

### Generic device development

| Command | Description |
| --- | --- |
| `Azure IoT Device Workbench: Create Project...`  | Create new IoT Device Workbench projects. |
| `Azure IoT Device Workbench: Open Examples...` | Load existing examples of IoT Device Workbench project. |
| `Azure IoT Device Workbench: Provision Azure Services...` | Provision Azure services for current project. |
| `Azure IoT Device Workbench: Deploy to Azure...`  | Deploy the code of the Azure services. |
| `Azure IoT Device Workbench: Compile Device Code`  | Compile device code. |
| `Azure IoT Device Workbench: Upload Device Code`  | Compile and upload device code. |
| `Azure IoT Device Workbench: Configure Device Settings...`  | Manage the settings on the device. |
| `Azure IoT Device Workbench: Set Workbench Path` | Set the default path for Azure IoT Device Workbench. |
| `Azure IoT Device Workbench: Help` | Get help for Azure IoT Device Workbench. |

### IoT Plug and Play 
***These commands are deprecated for Azure IoT Device Workbench 0.16.0 or above.***

| Command | Description |
| --- | --- |
| `IoT Plug and Play: Create Capability Model...`  | Create new IoT Plug and Play device capability model file. |
| `IoT Plug and Play: Create Interface...` | Create new IoT Plug and Play interface file. |
| `IoT Plug and Play: Generate Device Code Stub...` | Generate skeleton device code and project based on given device capability model file. |
| `IoT Plug and Play: Open Model Repository...`  | Open Public or Company Model Repository view to manage device model files. |
| `IoT Plug and Play: Submit files to Model Repository...`  | Submit files to model repository. |
| `IoT Plug and Play: Sign out Model Repository`  | Sign out the Company Model Repository. |

## Documentation

- [FAQ](https://github.com/microsoft/vscode-iot-workbench/wiki/FAQ)
- [MXChip IoT DevKit](https://aka.ms/iot-devkit)

## Privacy Statement

The [Microsft Enterprise and Developer Privacy Statement](https://www.microsoft.com/privacystatement/EnterpriseDev/default.aspx) describes the privacy statement of this software.

## Contributing

There are a couple of ways you can contribute to this repo:

- **Ideas, feature requests and bugs**: We are open to all ideas and we want to get rid of bugs! Use the Issues section to either report a new issue, provide your ideas or contribute to existing threads.
- **Documentation**: Found a typo or strangely worded sentences? Submit a PR!
- **Code**: Contribute bug fixes, features or design changes:
  - Clone the repository locally and open in VS Code.
  - Install [TSLint for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=eg2.tslint).
  - Open the terminal (press <code>Ctrl + &#96;</code>) and run `npm install`.
  - To build, press `F1` and type in `Tasks: Run Build Task`.
  - Debug: press `F5` to start debugging the extension.
  - Run `gts check` and `gts fix` to follow TypeScript style guide.  
- **Example**: Contribute examples for the supported devices.

  - Create a git repo to host the code of your example project.
  - Write a tutorial to describe how to run the example.
  - Submit a [new issue](https://github.com/Microsoft/vscode-iot-workbench/issues/new) and provide the following information:
  
    | Item | Description |
    | --- | --- |
    | `Name` | Name of the example to be displayed in example gallery. |
    | `Description` | A short statement to describe the example. |
    | `Location` | URL of the GitHub repo. |
    | `Image` | URL of the example image (size: 640*370) shown in the gallery, if not provided, the default image will be used. |
    | `Tutorial` | URL of tutorial that describes how to run the example. |
    | `Difficulty` | Difficulty of the example, easy, medium or difficult. |

## Code of Conduct

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct). For more information please see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/#howadopt) or contact opencode@microsoft.com with any additional questions or comments.

## Contact Us

If you would like to help to build the best IoT experience with Azure IoT Device Workbench, you can reach us directly at [Gitter](https://gitter.im/Microsoft/vscode-iot-workbench).

## Telemetry

VS Code collects usage data and sends it to Microsoft to help improve our products and services. Read our [privacy statement](https://go.microsoft.com/fwlink/?LinkID=528096&clcid=0x409) to learn more. If you don’t wish to send usage data to Microsoft, you can set the `telemetry.enableTelemetry` setting to `false`. Learn more in our [FAQ](https://code.visualstudio.com/docs/supporting/faq#_how-to-disable-telemetry-reporting).
