# 📱 Appium + JavaScript Complete Setup Guide (VS Code)

> Author: Personal Learning Notes\
> Stack: Appium + JavaScript + VS Code + Android Studio

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

# 2. Downloads

## Node.js

https://nodejs.org

## VS Code

https://code.visualstudio.com

## Android Studio

https://developer.android.com/studio

Install: - Android SDK - SDK Platform - SDK Platform Tools - Android
Emulator - Build Tools

## Appium Inspector

Download ONLY:

Appium-Inspector-\*-win-x64.exe

❌ Don't download Source Code ZIP.

------------------------------------------------------------------------

# 3. VS Code Extensions

-   ESLint
-   JavaScript (ES6) Snippets
-   npm IntelliSense
-   DotENV
-   Path IntelliSense
-   GitLens
-   Error Lens
-   Appium (optional)
-   Prettier

------------------------------------------------------------------------

# 4. Terminal Commands

## Check Node

``` bash
node -v
npm -v
```

Purpose: Checks Node & npm installation.

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

# 6. Emulator

Device

-   Pixel 7

Image

-   Android 15 API 35
-   Google Play Image

Verify

``` bash
adb devices
```

Expected

    emulator-5554    device

------------------------------------------------------------------------

# 7. Project Structure

    Js_Appium
    │
    ├── apps
    │   └── demo.apk
    │
    ├── capabilities
    │   └── android.js
    │
    ├── test
    │   └── login.test.js
    │
    ├── node_modules
    ├── package.json
    ├── package-lock.json
    ├── .env
    └── .gitignore

------------------------------------------------------------------------

# 8. Folder Purpose

apps → APK files

capabilities → Desired capabilities

test → Test scripts

.env → Environment variables

package.json → Dependencies & scripts

------------------------------------------------------------------------

# 9. Appium Architecture

    JavaScript Test
          │
          ▼
    Appium Client
          │
          ▼
    Appium Server
          │
          ▼
    UiAutomator2 Driver
          │
          ▼
    ADB
          │
          ▼
    Android Emulator
          │
          ▼
    Application (APK)

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

# 13. Learning Roadmap

-   Setup ✔
-   Architecture ✔
-   Emulator ✔
-   Inspector
-   Desired Capabilities
-   Session
-   Locators
-   Actions
-   Waits
-   Gestures
-   Assertions
-   Real Device
-   POM Framework
-   Reports
-   Parallel Execution

------------------------------------------------------------------------

# 14. Interview Questions

1.  What is Appium?
2.  Why UiAutomator2?
3.  Difference between Selenium and Appium?
4.  What is ADB?
5.  What are Desired Capabilities?
6.  Difference between Emulator and Real Device?
7.  Why Appium Inspector?
8.  Explain Appium Architecture.
