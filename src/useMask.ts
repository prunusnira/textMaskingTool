import { useCallback } from 'react';

const useMask = () => {
    /**
     * Text Masking Tool by PrunusNira (v1.0.0)
     * @param text Text to be masked
     * @param side Direction for masking text
     *             (e.g. left: masks leaving [length] characters from left side)
     * @param length Length of text as it was origin
     * @param maskInto (Optional) Masking text that will be changed (default: asterisk)
     */
    const maskText = useCallback(
        (
            text: string,
            side: 'left' | 'right',
            length: number,
            maskInto?: string,
        ) => {
            const textArray = text.split('').map((char, i) => {
                let txtLength = length;
                if (txtLength > text.length) {
                    txtLength = text.length;
                }
                if (side === 'left') {
                    if (i >= txtLength) {
                        if (maskInto) return maskInto;
                        return '*';
                    }
                    return char;
                }
                if (i < text.length - txtLength) {
                    if (maskInto) return maskInto;
                    return '*';
                }
                return char;
            });
            return textArray.join('');
        },
        [],
    );

    return { maskText };
};
export default useMask;
