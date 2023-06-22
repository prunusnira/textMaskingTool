import { renderHook } from '@testing-library/react'
import useMask from '../src/useMask'
import maskText from '../src/maskText'

describe('useMask test', () => {
  it('left side test', () => {
    const { result } = renderHook(() => useMask())
    expect(result.current.mask('test1', 'left', 2)).toEqual('te***')
  })
  it('right side test', () => {
    const { result } = renderHook(() => useMask())
    expect(result.current.mask('test1', 'right', 2)).toEqual('***t1')
  })
  it('left side test with maskInto', () => {
    const { result } = renderHook(() => useMask())
    expect(result.current.mask('test1', 'left', 2, '.')).toEqual('te...')
  })
  it('right side test with maskInto', () => {
    const { result } = renderHook(() => useMask())
    expect(result.current.mask('test1', 'right', 2, '/')).toEqual('///t1')
  })
  it('length over test 1 (left)', () => {
    const { result } = renderHook(() => useMask())
    expect(result.current.mask('test1', 'left', 5)).toEqual('test1')
  })
  it('length over test 2 (left)', () => {
    const { result } = renderHook(() => useMask())
    expect(result.current.mask('test1', 'left', 6)).toEqual('test1')
  })
  it('length over test 1 (right)', () => {
    const { result } = renderHook(() => useMask())
    expect(result.current.mask('test1', 'right', 5)).toEqual('test1')
  })
  it('length over test 2 (right)', () => {
    const { result } = renderHook(() => useMask())
    expect(result.current.mask('test1', 'right', 6)).toEqual('test1')
  })
})

describe('maskText test', () => {
    it('left side test', () => {
        expect(maskText('test1', 'left', 2)).toEqual('te***')
    })
    it('right side test', () => {
        expect(maskText('test1', 'right', 2)).toEqual('***t1')
    })
    it('left side test with maskInto', () => {
        expect(maskText('test1', 'left', 2, '.')).toEqual('te...')
    })
    it('right side test with maskInto', () => {
        expect(maskText('test1', 'right', 2, '/')).toEqual('///t1')
    })
    it('length over test 1 (left)', () => {
        expect(maskText('test1', 'left', 5)).toEqual('test1')
    })
    it('length over test 2 (left)', () => {
        expect(maskText('test1', 'left', 6)).toEqual('test1')
    })
    it('length over test 1 (right)', () => {
        expect(maskText('test1', 'right', 5)).toEqual('test1')
    })
    it('length over test 2 (right)', () => {
        expect(maskText('test1', 'right', 6)).toEqual('test1')
    })
})
