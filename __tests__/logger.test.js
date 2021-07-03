'use strict';
const loggerMiddleware = require('../src/middleware/logger');

describe('logger middleware', () => {
  let consoleSpy;
  const req = {};
  const res = {};
  const next = jest.fn();

  beforeEach (() => {
    consoleSpy = jest.spyOn (console, 'log').mockImplementation();
  });

  afterEach (() => {
    consoleSpy.mockRestore();
  });

  it ('Moving To next Middleware', () => {
    loggerMiddleware (req,res,next);
    expect(next).toHaveBeenCalled();
  });


});
