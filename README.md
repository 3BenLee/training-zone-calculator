# Cycling Power Zones Calculator

Many cyclists use power meters to measure their output on the bike these days. There are functional threshold power tests that are performed and measure an athletes average output capabilities. This FTP number is used to calculate training zones. I created this package to calculate the low and high points of each of the five training zones by inputting the rider's FTP number. For more information check:  [https://www.trainingpeaks.com/blog/power-training-levels/](https://www.trainingpeaks.com/blog/power-training-levels/)

## Installation

**npm**
```bash
npm -i training-zone-calculator
```

**yarn**
```bash
yarn add training-zone-calculator
```

## Usage

```js
import training-zone-calculator from 'training-zone-calculator';

const exampleZones1 = trainingZoneCalculator(234);
// => [0, 127, 128, 174, 175, 209, 210, 244, 245, 279]

const exampleZones2 = trainingZoneCalculator(-234);
// => null

const exampleZones3 = trainingZoneCalculator(234.4);
// => [0, 127, 128, 174, 175, 209, 210, 244, 245, 279]
```

# Reference
- [https://www.trainingpeaks.com/blog/power-training-levels/](https://www.trainingpeaks.com/blog/power-training-levels/)
