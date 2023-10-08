'use strict'

const { setTimeout } = require('timers/promises')
const test = require('ava')
const createTimeSpan = require('..')

test('default options', async t => {
  const timeSpan = createTimeSpan()
  const duration = timeSpan()
  await setTimeout(100)
  const end = duration()
  t.true(end > 100 && end < 100 + 100 * 0.02)
})

test('pass `start`', async t => {
  const start = process.hrtime.bigint()
  await setTimeout(100)
  const timeSpan = createTimeSpan()
  const duration = timeSpan(start)
  await setTimeout(100)
  const end = duration()
  t.true(end > 200 && end < 200 + 200 * 0.02)
})

test('pass `format`', async t => {
  const format = n => `${Math.round(n)}ms`
  const timeSpan = createTimeSpan({ format })
  const duration = timeSpan()
  await setTimeout(100)
  const end = duration()
  t.true(end.endsWith('ms'))
  t.true(
    Number(end.replace('ms', '')) === Math.round(Number(end.replace('ms', '')))
  )
})
