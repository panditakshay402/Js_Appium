# 📱 Appium + JavaScript Complete Setup Guide (Enhanced)

> Stack: Appium + JavaScript + WebdriverIO + Android Emulator + VS Code

------------------------------------------------------------------------

# 1. Prerequisites

  Software              Why Required
  --------------------- ------------------------------
  Node.js               Runs JavaScript and npm
  npm                   Installs packages
  VS Code               IDE
  Android Studio        SDK + Emulator
  Android SDK           Android libraries
  Platform Tools        Contains adb.exe
  Appium Server         Executes automation commands
  UiAutomator2 Driver   Android automation driver
  Appium Inspector      Inspect mobile elements

------------------------------------------------------------------------

## 2. Installation Verification

```bash
node -v
npm -v
java -version
appium -v
adb version
```

------------------------------------------------------------------------

## Install Appium

``` bash
npm install -g appium
```

Purpose: Installs Appium globally.

Verify

``` bash
appium -v
```

------------------------------------------------------------------------

## Install Android Driver

``` bash
appium driver install uiautomator2
```

Check Installed Drivers

``` bash
appium driver list --installed
```

Purpose: Allows Appium to automate Android devices.

------------------------------------------------------------------------

## Android Debug Bridge

``` bash
adb version
```

Purpose: Checks ADB installation.

``` bash
adb devices
```

Purpose: Lists connected Android devices/emulators.

Restart ADB

``` bash
adb kill-server
adb start-server
adb devices
```

------------------------------------------------------------------------

## Start Appium

``` bash
appium
```

Expected

    Appium REST interface started
    http://127.0.0.1:4723

------------------------------------------------------------------------

# 5. Environment Variables

Add Path

    C:\Users\<username>\AppData\Local\Android\Sdk

and

    C:\Users\<username>\AppData\Local\Android\Sdk\platform-tools

Reason: Without platform-tools Windows cannot recognize adb.

------------------------------------------------------------------------

------------------------------------------------------------------------

# 10. What Each Component Does

Node.js → Executes JavaScript

npm → Package Manager

Appium → Mobile Automation Server

UiAutomator2 → Controls Android

ADB → Connects PC ↔ Android

SDK → Android Libraries

Emulator → Virtual Phone

Inspector → Finds Locators

APK → Application Under Test

------------------------------------------------------------------------

# 11. Common Errors

### adb not recognized

Reason

PATH missing.

Fix

Add

    ...Android\Sdk\platform-tools

Restart terminal.

------------------------------------------------------------------------

### No devices found

Run

``` bash
adb devices
```

Start Emulator.

------------------------------------------------------------------------

### Driver Missing

Install

``` bash
appium driver install uiautomator2
```

------------------------------------------------------------------------

# 12. Useful Commands Cheat Sheet

``` bash
node -v
npm -v
appium -v
appium
appium driver list --installed
adb version
adb devices
adb kill-server
adb start-server
```

------------------------------------------------------------------------

## 3. Verify Environment Variables

```powershell
echo $env:ANDROID_HOME
echo $env:ANDROID_SDK_ROOT
```

## 4. Verify Driver

```bash
appium driver list --installed
appium driver install uiautomator2
```

## 5. Verify Emulator

```bash
adb devices
```

Expected:

```text
emulator-5554    device
```

If offline:

```bash
adb kill-server
adb start-server
adb devices
```

## 6. Verify APK

```powershell
Get-Item .\apps\ApiDemos.apk | Select Length
```

If Length = 0 then APK is corrupted.

## 7. Install APK

```bash
adb install -r .\apps\ApiDemos.apk
```

## 8. Start Appium

```bash
appium
```

Debug:

```bash
appium --log-level debug
```

## 9. Appium Inspector Flow

Start Emulator
→ Start Appium
→ Open Inspector
→ Load Capabilities
→ Start Session
→ Inspect Elements

## 10. Desired Capabilities

- platformName
- automationName
- deviceName
- app
- appPackage
- appActivity
- noReset
- fullReset
- newCommandTimeout
- autoGrantPermissions

## 11. Recommended Folder Structure

```text
Js_Appium
├── apps
├── capabilities
├── pages
├── tests
├── utils
├── reports
├── screenshots
├── config
├── .env
├── package.json
└── README.md
```

## 12. Health Check

```bash
node -v
npm -v
java -version
appium -v
adb version
adb devices
appium driver list --installed
echo $env:ANDROID_HOME
echo $env:ANDROID_SDK_ROOT
Get-Item .\apps\ApiDemos.apk | Select Length
```

## 13. Useful ADB Commands

```bash
adb devices
adb shell
adb install app.apk
adb uninstall package.name
adb logcat
adb reboot
adb push
adb pull
adb shell pm list packages
```

## 14. Common Errors

- adb not recognized → Add platform-tools to PATH.
- Driver Missing → Install UiAutomator2 driver.
- ANDROID_HOME Missing → Set environment variable.
- APK Size = 0 → Download APK again.
- Port 4723 Busy → Kill process using the port.

## 15. Appium Architecture

JavaScript Test
↓
WebdriverIO
↓
Appium Server
↓
UiAutomator2
↓
ADB
↓
Emulator
↓
APK

## 16. Learning Roadmap

- Setup
- Emulator
- Inspector
- Desired Capabilities
- Locators
- Assertions
- Waits
- Gestures
- POM
- Reports
- Parallel Execution
- CI/CD

## 17. Interview Questions

1. What is Appium?
2. Why UiAutomator2?
3. Selenium vs Appium?
4. What is ADB?
5. What are Desired Capabilities?
6. What is appPackage?
7. What is appActivity?
8. Explain Appium Architecture.

## 18. Final Checklist

- Emulator Running
- adb devices shows device
- Appium Server Running
- UiAutomator2 Installed
- APK Exists
- APK Size > 0
- ANDROID_HOME Set
- ANDROID_SDK_ROOT Set
- Correct Desired Capabilities

Happy Testing 🚀