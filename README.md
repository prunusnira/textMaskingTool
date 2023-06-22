# textMaskingTool
## Text Masking Tool for JS/TS
* Simple to use

```TypeScript
import useMask from 'text-masking-tool';

const { maskText } = useMask();
maskText('LoremIpsum', 'left', 3); // Lor*******
maskText('LoremIpsum', 'right', 3); // *******sum
maskText('LoremIpsum', 'left', 3, '.'); // Lor.......
```
