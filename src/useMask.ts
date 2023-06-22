import { useCallback } from 'react'
import maskText from './maskText'

const useMask = () => {
  /**
   * Text Masking Tool For React by PrunusNira (v1.0.0)
   * @param text Text to be masked
   * @param side Direction for masking text
   *             (e.g. left: masks leaving [length] characters from left side)
   * @param length Length of text as it was origin
   * @param maskInto (Optional) Masking text that will be changed (default: asterisk)
   */
  const mask = useCallback((text: string, side: 'left' | 'right', length: number, maskInto?: string) => {
    return maskText(text, side, length, maskInto);
  }, [])

  return { mask }
}
export default useMask
