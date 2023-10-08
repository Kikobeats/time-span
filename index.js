module.exports =
  ({ start = process.hrtime.bigint(), format = n => n } = {}) =>
    () =>
      format(Number(process.hrtime.bigint() - start) / 1e6)
