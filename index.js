module.exports =
  (start = process.hrtime.bigint()) =>
    () =>
      Number(process.hrtime.bigint() - start) / 1e6
