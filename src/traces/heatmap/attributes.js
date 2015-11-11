var scatterAttrs = require('../scatter/attributes');
var traceColorbarAttrs = require('../../components/colorbar/trace_attributes');

var extendFlat = require('../../lib/extend').extendFlat;


module.exports = {
    z: {
        valType: 'data_array',
        description: 'Sets the z data.'
    },
    x: scatterAttrs.x,
    x0: scatterAttrs.x0,
    dx: scatterAttrs.dx,
    y: scatterAttrs.y,
    y0: scatterAttrs.y0,
    dy: scatterAttrs.dy,
    text: {
        valType: 'data_array',
        description: 'Sets the text elements associated with each z value.'
    },
    transpose: {
        valType: 'boolean',
        dflt: false,
        role: 'info',
        description: 'Transposes the z data.'
    },
    xtype: {
        valType: 'enumerated',
        values: ['array', 'scaled'],
        role: 'info',
        description: [
            'If *array*, the heatmap\'s x coordinates are given by *x*',
            '(the default behavior when `x` is provided).',
            'If *scaled*, the heatmap\'s x coordinates are given by *x0* and *dx*',
            '(the default behavior when `x` is not provided).'
        ].join(' ')
    },
    ytype: {
        valType: 'enumerated',
        values: ['array', 'scaled'],
        role: 'info',
        description: [
            'If *array*, the heatmap\'s y coordinates are given by *y*',
            '(the default behavior when `y` is provided)',
            'If *scaled*, the heatmap\'s y coordinates are given by *y0* and *dy*',
            '(the default behavior when `y` is not provided)'
        ].join(' ')
    },
    zauto: traceColorbarAttrs.zauto,
    zmin: traceColorbarAttrs.zmin,
    zmax: traceColorbarAttrs.zmax,
    colorscale: traceColorbarAttrs.colorscale,
    autocolorscale: extendFlat({}, traceColorbarAttrs.autocolorscale,
        {dflt: false}),
    reversescale: traceColorbarAttrs.reversescale,
    showscale: traceColorbarAttrs.showscale,
    zsmooth: {
        valType: 'enumerated',
        values: ['fast', 'best', false],
        dflt: false,
        role: 'style',
        description: [
            'Picks a smoothing algorithm use to smooth `z` data.'
        ].join(' ')
    },
    connectgaps: {
        valType: 'boolean',
        dflt: false,
        role: 'info',
        description: [
            'Determines whether or not gaps',
            '(i.e. {nan} or missing values)',
            'in the `z` data are filled in.'
        ].join(' ')
    },
    _nestedModules: {  // nested module coupling
        'colorbar': 'Colorbar'
    },
    _composedModules: {  // composed module coupling
        'histogram2d': 'Histogram',
        'histogram2dcontour': 'Histogram'
    }
};
