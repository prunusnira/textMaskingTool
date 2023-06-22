# textMaskingTool
## Text Masking Tool for JS/TS
* Simple to use

```TypeScript
// for React
import useMask from 'text-masking-tool';

const { mask } = useMask();
mask('LoremIpsum', 'left', 3); // Lor*******
mask('LoremIpsum', 'right', 3); // *******sum
mask('LoremIpsum', 'left', 3, '.'); // Lor.......

// for TS
import maskText from 'text-masking-tool';

maskText('LoremIpsum', 'left', 3); // Lor*******
maskText('LoremIpsum', 'right', 3); // *******sum
maskText('LoremIpsum', 'left', 3, '.'); // Lor.......
```
